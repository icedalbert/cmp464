<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
  import header from './components/header'
  import footer from './components/footer'
  export default {
    name: 'App',
    components: {
      'app-header': header,
      'app-footer': footer
    }
  }
</script>

<style scoped>

</style>
