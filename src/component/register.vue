<template>
  <div id="contact">
    <section class="pageHeight">
      <div class="col-md-6 mx-auto my-3">
        <h3 class="fw-bold text-center text-dark">Register</h3>
        <form class="col-md-6 mx-auto">
          <fieldset>
            <div class="form-group">
              <label for="exampleInputName" class="form-label mt-4">Name</label>
              <input type="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputpassword" class="form-label mt-4">Password</label>
              <input type="password" class="form-control" id="exampleInputpassword" aria-describedby="emailHelp" placeholder="Enter password">
            </div>
            <div class="form-group">
              <label for="exampleInputconfirmpassword" class="form-label mt-4">Confirm Password</label>
              <input type="password" class="form-control" id="exampleInputconfirmpassword" aria-describedby="emailHelp" placeholder="Enter name">
            </div>
            <button type="submit" class="btn btn-dark my-2">Register</button>
          </fieldset>
          <div class="footerText">
            <p>Do You have an account? <router-link :to="'/login'">Login</router-link> </p>
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
</style>
