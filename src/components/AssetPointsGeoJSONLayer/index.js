import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GeoJSONLayer } from 'react-mapbox-gl'
import { setSelectedFeature, setOverlay } from '../../actions'

const circlePaint: MapboxGL.CirclePaint = {
  'circle-radius': 4,
  'circle-color': '#145887',
  'circle-opacity': 0.8,
  'circle-stroke-width': 0.5,
  'circle-stroke-color': '#000',
}

class AssetPointsGeoJSONLayer extends Component {
  clickedFeature = evt => {
    const { mapObject } = this.props

    if (evt.features[0].properties) {
      this.props.setSelectedFeature(evt.features[0].properties)
      this.props.setOverlay(true)
    }
    mapObject.flyTo({ center: evt.features[0].geometry.coordinates })
  }

  circleOnMouseEnter = () => {
    const { mapObject } = this.props
    mapObject.getCanvas().style.cursor = 'pointer'
  }

  circleOnMouseLeave = () => {
    const { mapObject } = this.props
    mapObject.getCanvas().style.cursor = ''
  }

  render = () => {
    const { mapLayer } = this.props

    if (!mapLayer) {
      return null
    }

    return (
      <div>
        <GeoJSONLayer
          data={mapLayer}
          circlePaint={circlePaint}
          circleOnClick={this.clickedFeature}
          circleOnMouseEnter={this.circleOnMouseEnter}
          circleOnMouseLeave={this.circleOnMouseLeave}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mapLayer: state.map.mapLayer,
})

const mapDispatchToProps = {
  setSelectedFeature,
  setOverlay,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetPointsGeoJSONLayer)
