<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import header from './component/header'
  import footer from './component/footer'
  import card from './component/card'

  export default {
    components: {
      'app-header': header,
      'app-footer': footer,
      'app-card': card
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
