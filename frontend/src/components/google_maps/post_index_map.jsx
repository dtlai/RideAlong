import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
const googleMapsAPI = require("../../config/keys").googleMapsAPI;

const mapStyles = {
  width: '100%',
  height: '100%'
};
const containerStyle = {
  position: 'absolute', 
  width: '60%', 
  height:'90vh',
  marginRight: '40px'
};

// const markerInfo = [
//   {
//     driver: {
//       first_name: "David",
//       last_name: "Lai"
//     },
//     seats: 4,
//     location: { 
//       pickup: "Little Tokyo",
//       dropoff: "Santa Monica"
//     }
//    },
//    {
//     driver: {
//       first_name: "Nathan",
//       last_name: "Luu"
//     },
//     seats: 2,
//     location: { 
//       pickup: "Hollywood",
//       dropoff: "San Francisco"
//     }
//    },
//    {
//     driver: {
//       first_name: "Michael",
//       last_name: "Lau"
//     },
//     seats: 1,
//     location: { 
//       pickup : "Koreatown",
//       dropoff: "Disneyland"
//     }
//    }
// ];

Geocode.setApiKey(googleMapsAPI);

export class CurrentMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {
        info: {
          driver: "",
          seats: null,
          location: {
            pickup: "",
            dropoff: ""
          }
        }
      },
      center: {},
      markers: []
    }
    this.recenterMap = this.recenterMap.bind(this);
    this.getLatLong = this.getLatLong.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    const locate = pos => {
      this.setState({center: {lat: pos.coords.latitude, lng: pos.coords.longitude}})
    }
    navigator.geolocation.getCurrentPosition(pos => locate(pos))
    let markerInfo = this.props.posts.map(post => ({
    driver: post.user,
    seats: post.capacity - post.numPassengers,
    location: { 
      pickup: post.startLocation,
      dropoff: post.endLocation
      }
    }));
    markerInfo.forEach(info => this.getLatLong(info));
  }

  recenterMap(mapProps, map, event) {
    this.setState({center: event.latLng})
  }

  getLatLong(markerInfo) {
    Geocode.fromAddress(markerInfo.location.pickup).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      let oldMarkers = this.state.markers;
      markerInfo.location.coords = {lat: lat, lng: lng};
      oldMarkers = oldMarkers.concat(markerInfo);
      this.setState({markers: oldMarkers});
    }, 
    (error) => {
      console.error(error);
    }
);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        disableDoubleClickZoom={true}
        streetViewControl={false}
        mapTypeControl={false}
        ref="map"
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{lat: 37.7529, lng: -122.4474}}
        onDblclick={this.recenterMap}
        >
        { this.state.markers.map((markerInfo, idx) => <Marker position={markerInfo.location.coords} key={`marker-${idx}`} info={markerInfo} onClick={this.onMarkerClick}/>)}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>Driver: {this.state.selectedPlace.info.driver}</h4>
              <h4>Seats Available: {this.state.selectedPlace.info.seats}</h4>
              <h4>Pickup: {this.state.selectedPlace.info.location.pickup}</h4>
              <h4>Dropoff: {this.state.selectedPlace.info.location.dropoff}</h4>
              <a href={`/posts/${this.state.activeMarker._id}`}></a>
              {/* <a to={`/posts/${this.state.activeMarker._id}`}/> */}
            </div>
          </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsAPI
})(CurrentMap);