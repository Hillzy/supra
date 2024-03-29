//Dependencies
import React, { Component } from "react";
//Components
import DirectionsBox from "./DirectionsBox";
import MapDefault from "./MapDefault";
//Styles
import mapsCSS from "../../styles/maps.module.css";

class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      loadmap: false,
      isMarkerShown: false
    };
  }

  componentWillUpdate() {
    this.getGeoLocation();
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation();
      this.setState({ isMarkerShown: true });
      this.setState({ loadmap: true });
    }, 1000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }));
      });
    }
  };

  render() {
    return (
      <div className={mapsCSS.container}>
        <div className={mapsCSS.Maps}>
          {this.state.loadmap && (
            <MapDefault
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
              currentLocation={this.state.currentLatLng}
            />
          )}
        </div>
      </div>
    );
  }
}
export default MapsContainer;
