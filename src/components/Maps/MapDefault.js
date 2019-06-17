//Dependencies
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
//Components
import carIcon from "../../assets/images/car.svg";
//Styles

const MapDefault = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDM0Fnk6wrMECmWBaQZJKW2iD9ZkwXxLBM&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillUpdate() {}
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{
      lat: props.currentLocation.lat,
      lng: props.currentLocation.lng
    }}
    center={{
      lat: props.currentLocation.lat,
      lng: props.currentLocation.lng
    }}
    defaultOptions={{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      scaleControl: false,
      zoomControl: false
    }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{
          lat: props.currentLocation.lat,
          lng: props.currentLocation.lng
        }}
        icon={carIcon}
      />
    )}
  </GoogleMap>
));

export default MapDefault;
