<template>
  <div id="onborading-step3" class="card">
    <h4 class="card-header">Step 3</h4>
    <div class="card-body">
      <form v-on:submit.prevent>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Example multiple select</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        <div class="clearfix">
          <button class="btn" v-on:click="$parent.back($options.name)">Prev</button>
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
    name: 'onboarding-step3',

    methods: {},

    /**
     * The components that the page can use.
     */
    components: {},
    inherit: true,
  };
</script>
