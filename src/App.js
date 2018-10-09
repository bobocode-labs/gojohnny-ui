import React, {Component} from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';

class App extends Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYm95NHVjayIsImEiOiJkWlgxdVhRIn0.nzy-n4qIL6QNPiWtTO_UTw';
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/boy4uck/cj8795w2h3c5k2qs6sq35cu9z',
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
                top: 0,
                bottom: 0,
                width: '100%'
        };

        return <div style={style} ref={el => this.mapContainer = el} />;
    }
}

export default App;
