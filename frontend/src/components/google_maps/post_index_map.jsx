import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
  width: '60%',
  height: '60%'
};

Geocode.setApiKey("AIzaSyCVOIEoWeHdQazoiFcE5jrwVZconSlR4uY");

export class PostIndexMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      coords: {lat: 34.052339, lng: -118}
    }
  }

  componentDidMount() {
    this.getLatLong("Hollywood");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.google !== this.props.google) {
  //     this.loadMap();
  //   }
  //   if (prevState.currentLocation !== this.state.currentLocation) {
  //     this.recenterMap();
  //   }
  // }

  // recenterMap() {
  //   const map = this.map;
  //   const current = this.state.currentLocation;
  //   const google = this.props.google;
  //   const maps = google.maps;

  //   if (map) {
  //     let center = new maps.LatLng(current.lat, current.lng);
  //     map.panTo(center);
  //   }
  // }

  getLatLong(address) {
    Geocode.fromAddress(address).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    this.setState({coords: {lat: lat, lng: lng}})
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
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          this.state.coords          
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Little Tokyo, Los Angeles'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVOIEoWeHdQazoiFcE5jrwVZconSlR4uY'
})(PostIndexMap);