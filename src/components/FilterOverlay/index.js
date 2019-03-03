import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { setMapLayer } from '../../actions'
import styled from 'styled-components'
import _ from 'lodash'

const MapFilterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 999;
  left: 10px;
  top: 100px;
  height: 160px;
  width: 200px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0 #b4b4b4;
`

const MapFilterHeader = styled.div`
  margin-left: 12px;
  margin-top: 12px;
  color: #191919;
  font-weight: 500;
  font-size: 14px;
`

const FormContainer = styled(Form)`
  margin-left: 12px;
  margin-top: 5px;
  font-size: 12px;
`

const CheckboxLabel = styled(Label)`
  color: rgba(17, 17, 17, 0.6);
`

const councilDictionary = {
  1: 'ALPINE',
  2: 'CARDINIA',
  3: 'CASEY',
  4: 'MORNINGTON PENINSULA',
  5: 'WODONGA',
}

class FilterOverlay extends Component {
  handleChange = selected => {
    this.filterLayer(selected)
  }

  filterLayer = selected => {
    let selectedCouncil = councilDictionary[selected]
    let originalList = Object.assign({}, this.props.originalLayer)
    let assetList = originalList.features
    if (selectedCouncil) {
      assetList = _.filter(assetList, item => {
        return item.properties.council === selectedCouncil
      })
    }

    originalList['features'] = assetList
    this.props.setMapLayer(Object.assign({}, originalList))
  }

  renderMapSelectors = () => {
    return (
      <FormContainer>
        <FormGroup check>
          <CheckboxLabel check>
            <Input
              type="radio"
              name="light"
              onClick={() => this.handleChange(1)}
            />
            ALPINE
          </CheckboxLabel>
        </FormGroup>
        <FormGroup check>
          <CheckboxLabel check>
            <Input
              type="radio"
              name="light"
              onClick={() => this.handleChange(2)}
            />
            CARDINIA
          </CheckboxLabel>
        </FormGroup>
        <FormGroup check>
          <CheckboxLabel check>
            <Input
              type="radio"
              name="light"
              onClick={() => this.handleChange(3)}
            />
            CASEY
          </CheckboxLabel>
        </FormGroup>
        <FormGroup check>
          <CheckboxLabel check>
            <Input
              type="radio"
              name="light"
              onClick={() => this.handleChange(4)}
            />
            MORNINGTON PENINSULA
          </CheckboxLabel>
        </FormGroup>
        <FormGroup check>
          <CheckboxLabel check>
            <Input
              type="radio"
              name="light"
              onClick={() => this.handleChange(5)}
            />
            WODONGA
          </CheckboxLabel>
        </FormGroup>
        <FormGroup check>
          <CheckboxLabel check>
            <Input
              type="radio"
              name="light"
              onClick={() => this.handleChange(6)}
            />
            ALL
          </CheckboxLabel>
        </FormGroup>
      </FormContainer>
    )
  }

  render() {
    return (
      <MapFilterContainer>
        <MapFilterHeader>Filter by Council</MapFilterHeader>
        {this.renderMapSelectors()}
      </MapFilterContainer>
    )
  }
}

const mapStateToProps = state => ({
  originalLayer: state.map.originalLayer,
})

const mapDispatchToProps = {
  setMapLayer,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterOverlay)
