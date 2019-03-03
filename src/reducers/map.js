import {
  SETTING_MAP_LAYER,
  SETTING_SELECTED_FEATURE,
  SETTING_OVERLAY,
  SETTING_ORIGINAL_LAYER,
} from '../actionTypes'

const initialState = {
  mapLayer: null,
  originalLayer: null,
  selectedFeature: null,
  overlayState: false,
}

export default function map(state = initialState, { type, payload }) {
  switch (type) {
    case SETTING_ORIGINAL_LAYER:
      return {
        ...state,
        originalLayer: payload,
      }
    case SETTING_MAP_LAYER:
      return {
        ...state,
        mapLayer: payload,
      }
    case SETTING_SELECTED_FEATURE:
      return {
        ...state,
        selectedFeature: payload,
      }
    case SETTING_OVERLAY:
      return {
        ...state,
        overlayState: payload,
      }
    default:
      return state
  }
}
