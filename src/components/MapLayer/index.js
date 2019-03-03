import React, { Component } from 'react'
import AssetPointsGeoJSONLayer from '../AssetPointsGeoJSONLayer'
import styled from 'styled-components'
import ReactMapboxGl from 'react-mapbox-gl'
import { connect } from 'react-redux'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYnRzZGF0YXZpc3VhbGlzYXRpb24iLCJhIjoiX3VZZWdoNCJ9.pz-apO3V61vdVAsT6D2tFw',
  maxZoom: 16,
  minZoom: 6,
})
const center = [145.5507688, -37.2220035]
const zoom = [7]

const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`

class MapLayer extends Component {
  constructor(props) {
    super(props)
    this.state = { style: 'mapbox://styles/mapbox/light-v9' }
  }

  onStyleLoad = (map, e) => {
    this.setState({ mapobject: map })
  }

  render() {
    const { mapobject, style } = this.state

    return (
      <MapContainer>
        <Map
          style={style}
          center={center}
          zoom={zoom}
          onStyleLoad={this.onStyleLoad}
          containerStyle={{
            height: '100%',
            width: '100%',
          }}
        >
          <AssetPointsGeoJSONLayer mapObject={mapobject} />
        </Map>
      </MapContainer>
    )
  }
}

const mapStateToProps = state => ({
  mapLayer: state.map.mapLayer,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapLayer)
