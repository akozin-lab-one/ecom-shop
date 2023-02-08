<template>
  <div id="contact">
    <section class="pageHeight">
      <div class="col-md-6 mx-auto my-3">
        <h3 class="fw-bold text-center text-dark">Contact Here!</h3>
        <form class="col-md-6 mx-auto">
  <fieldset>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4">Explanation</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-dark my-2">Submit</button>
  </fieldset>
</form>
      </div>
    </section>
  </div>
</template>

<script>
export default{
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.pageHeight{
  height: 24.4rem;
}
</style>
