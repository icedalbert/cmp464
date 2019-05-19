<template>
  <div class="home">
    <div class="row">
      <app-cards></app-cards>
    </div>

    <div class="row">
      <div id="work-collections">
        <div class="row">
          <app-collections-status></app-collections-status>
          <app-collections-channel></app-collections-channel>
        </div>
      </div>
    </div>

    <div class="row">
      <app-request></app-request>
    </div>

  </div>
</template>

<script>
  import cards from './cards'
  import collectionChannel from './collection-channel'
  import collectionStatus from './collection-status'
  import request from './request'
  export default {
    name: 'home',
    components: {
      'app-cards': cards,
      'app-collections-status': collectionStatus,
      'app-collections-channel': collectionChannel,
      'app-request': request
    }
  }
</script>

<style scoped>
  html {
    font-family: 'Muli', sans-serif !important;
    font-weight: normal;
    line-height: 1.5;
    color: #6b6f82;
  }

  .row {
    margin: 0px;
  }
</style>
