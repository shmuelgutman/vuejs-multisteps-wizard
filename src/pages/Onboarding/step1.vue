<template>
    <div id="onborading-step1" class="card">
      <h4 class="card-header">Step 1</h4>
      <div class="card-body">
        <form @submit.prevent="$parent.next($options.name)">
          <div class="form-group row">
            <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Email address</label>
            <div class="col-sm-8">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputPassword1" class="col-sm-4 col-form-label">Password</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              Check me out
            </label>
          </div>
          <div class="clearfix">
            <button type="submit" class="btn btn-primary pull-right">Next</button>
          </div>
        </form>
      </div>
      <div class="card-footer">Hi, im footer</div>
    </div>
</template>

<script>

  export default {
    /**
     * The name of the page.
     */
    name: 'onboarding-step1',

    methods: {},

    /**
     * The components that the page can use.
     */
    components: {},
    inherit: true,
  };
</script>
