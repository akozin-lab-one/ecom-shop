<template>
  <div id="contact">
    <section class="pageHeight">
      <div class="col-md-6 mx-auto my-3">
        <h3 class="fw-bold text-center text-dark">Login</h3>
        <form class="col-md-6 mx-auto">
          <fieldset>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputpassword" class="form-label mt-4">Password</label>
              <input type="password" class="form-control" id="exampleInputpassword" aria-describedby="emailHelp" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-dark my-2">Login</button>
          </fieldset>
          <div class="footerText">
            <p>Don't You have an account? <router-link :to="'/register'">Register</router-link> </p>
          </div>
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
  height:24rem;
}
</style>
