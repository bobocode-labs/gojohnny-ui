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
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{"icon-image": "marker-15"}}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                    </Layer>
                </Map>

            </div>
        );
    }
}

export default App;