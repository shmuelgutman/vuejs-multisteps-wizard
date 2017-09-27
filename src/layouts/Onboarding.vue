<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-8">
        <!-- Content will be placed here -->
        <div id="onboarding-wrap"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    /**
     * The name of the layout.
     */
    name: 'onboarding-layout',
  };
</script>
