import {
  SETTING_MAP_LAYER,
  SETTING_SELECTED_FEATURE,
  SETTING_OVERLAY,
  SETTING_ORIGINAL_LAYER,
} from '../actionTypes'

export const setOriginalLayer = layer => ({
  type: SETTING_ORIGINAL_LAYER,
  payload: layer,
})

export const setMapLayer = layer => ({
  type: SETTING_MAP_LAYER,
  payload: layer,
})

export const setSelectedFeature = layer => ({
  type: SETTING_SELECTED_FEATURE,
  payload: layer,
})

export const setOverlay = overlayState => ({
  type: SETTING_OVERLAY,
  payload: overlayState,
})
