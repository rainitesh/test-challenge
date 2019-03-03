import React, { Component } from 'react'
import styled from 'styled-components'
import MenuBar from '../MenuBar'
import MapLayer from '../MapLayer'
import PopupOverlay from '../PopupOverlay'
import FilterOverlay from '../FilterOverlay'
import '../../index.css'

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
`

class App extends Component {
  render() {
    return (
      <Container>
        <MenuBar />
        <MapLayer />
      </Container>
    )
  }
}

export default App
