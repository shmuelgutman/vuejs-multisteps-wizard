/* ============
 * Actions for the onboarding module
 * ============
 *
 * The actions that are available on the
 * onboarding module.
 */

import Vue from 'vue';
// import store from '@/store';
import * as types from './mutation-types';


export const transitStep = ({ commit }, payload) => {
  let toRoute, toStep;

  switch (payload.step) {
    case 'onboarding-step1':
      toRoute = payload.direction === 'next' ? 'onboarding.step2' : null;
      toStep = payload.direction === 'next' ? 'onboarding-step2' : null;
      break;
    case 'onboarding-step2':
      toRoute = payload.direction === 'next' ? 'onboarding.step3' : 'onboarding.step1';
      toStep = payload.direction === 'next' ? 'onboarding-step3' : 'onboarding-step1';
      break;
    case 'onboarding-step3':
      toRoute = payload.direction === 'next' ? null : 'onboarding.step2';
      toStep = payload.direction === 'next' ? null : 'onboarding-step2';
      break;
    default:
      toRoute = 'onboarding.step1';
      toStep = 'onboarding-step1';
  }
  if (toRoute && toStep) {
    Vue.router.push({ name: toRoute });
    commit(types.TRANSIT_STEP, toStep);
  }
};


export const processDataAndTransitStep = ({ commit }, payload) => {
  commit(types.PROCESSING_DATA_START);
  // submit data  to server and handle response
  setTimeout(() => {
    commit(types.PROCESSING_DATA_END);
    transitStep({ commit }, payload);
  }, 500);
};

export default {
  transitStep,
  processDataAndTransitStep,
};
