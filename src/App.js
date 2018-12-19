import React, {Component} from 'react';
import './App.css';
import ReactMapGL, {Marker} from 'react-map-gl';

const mapboxStyleUrl = 'mapbox://styles/boy4uck/cj8795w2h3c5k2qs6sq35cu9z';
const mapboxAccessToken = 'pk.eyJ1IjoiYm95NHVjayIsImEiOiJkWlgxdVhRIn0.nzy-n4qIL6QNPiWtTO_UTw';
const mockPoints = [
    {
        id: 1,
        name: "Сивуля Мала (Mock)",
        description: "",
        altitude: 1815,
        location: {type: "Point", coordinates: [24.129341868695505, 48.54517608528801]},
        photoUrl: "http://ic.pics.livejournal.com/ryzhkov_sergey/51900141/419236/419236_original.jpg"
    }
];

const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%'
};

class App extends Component {

    state = {
        viewport: {
            width: '100%',
            height: '100%',
            latitude: 48.54750,
            longitude: 24.11032,
            zoom: 14
        },
        points: mockPoints
    };

    _onViewportChange = viewport => {
        this.setState({viewport});

    };

    componentDidMount() {
        fetch('http://localhost:8080/places')
            .then(response => response.json())
            .then(data => this.setState({points: data._embedded.places}));
    }

    render() {
        return (
            <div style={style}>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={this._onViewportChange}
                    mapboxApiAccessToken={mapboxAccessToken}
                    mapStyle={mapboxStyleUrl}
                >
                    {this.state.points.map(point => (
                        <Marker key={point.id} longitude={point.location.coordinates[0]}
                                latitude={point.location.coordinates[1]}>{point.name}</Marker>))}
                </ReactMapGL>
            </div>
        );
    }
}

export default App;
