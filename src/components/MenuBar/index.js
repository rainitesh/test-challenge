import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

import { setMapLayer, setOriginalLayer } from '../../actions'

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #145887;
  box-shadow: 1px 1px 4px 0 #b4b4b4;
  z-index: 1;
`

const TitleContainer = styled.div`
  display: inline-block;
  position: absolute;
  box-sizing: border-box;
  margin-left: 12px;
  margin-top: 20px;
  margin-bottom: 12px;
`

const MainTitle = styled.div`
  color: #ffffff;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`

class MenuBar extends Component {
  componentDidMount = () => {
    this.fetchDataFile()
  }

  fetchDataFile = () => {
    fetch('data/properties.json')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.prepareDataLayer(json)
      })
  }

  prepareDataLayer = data => {
    if (!data) {
      return null
    }

    const tempFeatures = []
    _.forEach(data, item => {
      let tempFeature = {
        type: 'Feature',
        properties: item,
        geometry: {
          type: 'Point',
          coordinates: [item.longitude, item.latitude],
        },
      }
      tempFeatures.push(tempFeature)
    })

    const dataLayer = {
      type: 'FeatureCollection',
      features: tempFeatures,
    }
    this.props.setOriginalLayer(dataLayer)
    this.props.setMapLayer(dataLayer)
  }

  render() {
    return (
      <Container>
        <TitleContainer>
          <MainTitle>Web Map - Coding Challenge</MainTitle>
        </TitleContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  setMapLayer,
  setOriginalLayer,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)
