/* ============
 * Mutations for the onboarding module
 * ============
 *
 * The mutations that are available on the
 * onboarding module.
 */

import {
  TRANSIT_STEP,
  PROCESSING_DATA_START,
  PROCESSING_DATA_END,
} from './mutation-types';

export default {
  [TRANSIT_STEP](state, toStepName) {
    state.currentStep = toStepName;
  },
  [PROCESSING_DATA_START](state) {
    state.processingData = true;
  },
  [PROCESSING_DATA_END](state) {
    state.processingData = false;
  },
};
