import React, {Component} from 'react';
import './App.css';

// ES6
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYm95NHVjayIsImEiOiJkWlgxdVhRIn0.nzy-n4qIL6QNPiWtTO_UTw"
});

class App extends Component {


    render() {
        return (
            <div className="App">
                <Map
                    style="mapbox://styles/boy4uck/cj8795w2h3c5k2qs6sq35cu9z"
                    center={[24.49891090393066, 48.36674224855921]}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                </Map>

            </div>
        );
    }
}

export default App;