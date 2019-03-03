import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import styled, { css } from 'styled-components'
import { setOverlay } from '../../actions'

const OverlayContainer = styled.div`
  position: absolute;
  z-index: 999;
  right: 30px;
  top: 100px;
  height: 178px;
  width: 380px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0 #b4b4b4;
`

const OverlayHeader = styled.div`
  height: 48px;
  width: 380px;
  border-radius: 4px 4px 0 0;
  background-color: #145887;
  margin-left: 0px;
`

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ffffff;
  cursor: pointer;
  z-index: 999;
`

const LabelName = styled.div`
  height: 18px;
  color: rgba(17, 17, 17, 0.6);
  font-size: 12px;
  line-height: 18px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 12px;
  ${props =>
    props.nextDatum &&
    css`
      margin-top: 6px;
    `};
`

const LabelValue = styled.div`
  color: #111111;
  display: inline;
  padding-left: 2px;
`

const OverlayHeaderTitle = styled.div`
  height: 42px;
  width: 220px;
  display: inline-block
  color: #ffffff;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`

class PopupOverlay extends Component {
  closeOverlayPopup = () => {
    this.props.setOverlay(false)
  }

  render() {
    const { selectedFeature, overlayState } = this.props

    if (!selectedFeature) {
      return null
    }

    if (overlayState) {
      return (
        <OverlayContainer>
          <OverlayHeader>
            <CloseButton onClick={this.closeOverlayPopup}>
              <FontAwesome name="times" />
            </CloseButton>
            <OverlayHeaderTitle>{selectedFeature.council}</OverlayHeaderTitle>
          </OverlayHeader>
          <LabelName>
            Property Id:
            <LabelValue>{selectedFeature.property_id}</LabelValue>
          </LabelName>
          <LabelName nextDatum>
            Council Property Number:
            <LabelValue>{selectedFeature.council_property_number}</LabelValue>
          </LabelName>
          <LabelName nextDatum>
            Address:
            <LabelValue>{selectedFeature.full_address}</LabelValue>
          </LabelName>
          <LabelName nextDatum>
            Lga Code:
            <LabelValue>{selectedFeature.lga_code}</LabelValue>
          </LabelName>
          <LabelName nextDatum>
            Postcode:
            <LabelValue>{selectedFeature.postcode}</LabelValue>
          </LabelName>
        </OverlayContainer>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => ({
  overlayState: state.map.overlayState,
  selectedFeature: state.map.selectedFeature,
})

const mapDispatchToProps = {
  setOverlay,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupOverlay)
