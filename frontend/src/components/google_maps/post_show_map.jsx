import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
const googleMapsAPI = require("../../config/keys").googleMapsAPI;

const mapStyles = {
  width: '100%',
  height: '100%'
};
const containerStyle = {
  position: 'relative', 
  width: '70rem', 
  height:'30rem',
  marginLeft: '20rem',
  background: 'gray'
};

Geocode.setApiKey(googleMapsAPI);

export class ShowMap extends Component {
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
    const post = this.props.post;
    let markerInfo = {
    driver: post.user.firstName + " " + post.user.lastName,
    seats: post.capacity - post.numPassengers,
    location: { 
      pickup: post.startLocation,
      dropoff: post.endLocation
      }
    };
    this.getLatLong(markerInfo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post._id !== this.props.post._id) {
      const post = this.props.post;
      let markerInfo = {
      driver: post.user.firstName + " " + post.user.lastName,
      seats: post.capacity - post.numPassengers,
      location: { 
        pickup: post.startLocation,
        dropoff: post.endLocation
        }
    };
    this.getLatLong(markerInfo);
    }
  }

  recenterMap(mapProps, map, event) {
    this.setState({center: event.latLng})
  }

  getLatLong(markerInfo) {
    Geocode.fromAddress(markerInfo.location.pickup).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      markerInfo.location.coords = {lat: lat, lng: lng};
      this.setState({markers: [markerInfo], center: markerInfo.location.coords});
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
        center={
          this.state.center       
        }
        onDblclick={this.recenterMap}
        >
        { this.state.markers.map((markerInfo, idx) => <Marker position={markerInfo.location.coords} key={`marker-${idx}`} info={markerInfo} onClick={this.onMarkerClick}/>)}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div className="post-show-marker-box">
            <h4>Driver: {this.state.selectedPlace.info.driver} {this.state.selectedPlace.info.driver.last_name}</h4>
            <h4>Seats Available: {this.state.selectedPlace.info.seats === 0 ? "FULL" : this.state.selectedPlace.info.seats}</h4>
            <h4>Pickup: {this.state.selectedPlace.info.location.pickup}</h4>
            <h4>Dropoff: {this.state.selectedPlace.info.location.dropoff}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsAPI
})(ShowMap);