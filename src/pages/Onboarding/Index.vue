<template>
  <div class="container" :class="{loading: processingData}">
    <div class="row justify-content-center">
      <div class="col col-8">
        <div class="stepwizard">
          <div class="stepwizard-row">
            <div class="stepwizard-step">
              <button type="button" class="btn btn-default btn-circle"
                      :class="{'btn-primary active': currentStep == 'onboarding-step1'}">1
              </button>
            </div>
            <div class="stepwizard-step">
              <button type="button" class="btn btn-default btn-circle"
                      :class="{'btn-primary active': currentStep == 'onboarding-step2'}">2</button>
            </div>
            <div class="stepwizard-step">
              <button type="button" class="btn btn-default btn-circle"
                      :class="{'btn-primary active': currentStep == 'onboarding-step3'}">3</button>
            </div>
          </div>
        </div>

        <div id="onboarding-wrap">
          <transition name="fade">
            <router-view></router-view>
          </transition>
          <div class="loading-mask">
            <div class="loading-spinner"><i class='fa fa-spinner fa-spin '></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    /**
     * The name of the layout.
     */
    name: 'onboarding-wrap',

    mounted() {
      this.$store.dispatch('onboarding/transitStep', { step: null, direction: 'next' });
    },

    methods: {

      next(stepName) {
        this.$store.dispatch('onboarding/processDataAndTransitStep', { step: stepName, direction: 'next' });
        // this.$store.dispatch('onboarding/next', { step: stepName });
      },
      back(stepName) {
        this.$store.dispatch('onboarding/transitStep', { step: stepName, direction: 'prev' });
      },
    },

    computed: mapState({
      processingData: state => state.onboarding.processingData,
      currentStep: state => state.onboarding.currentStep,
    }),
  };
</script>
