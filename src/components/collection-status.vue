<template>
  <div class="col s12 m12 l6">
    <ul id="projects-collection" class="collection z-depth-1 animate fadeRight">
      <li class="collection-item avatar">
        <i class="material-icons cyan circle">card_travel</i>
        <h6 class="collection-header m-0">Requests</h6>
        <p>(by status)</p>
      </li>
      <li v-for="item in info" class="collection-item">
        <div class="row">
          <div class="col s5">
            <p class="collections-title"><strong>{{ item.status }}</strong></p>
            <!-- <p class="collections-content">Web Project</p> -->
          </div>
          <div class="col s3"><span
              class="task-cat deep-orange accent-2">{{ Number(item.count).toLocaleString() }}</span></div>
          <div class="col s4">
            <div class="progress">
              <div class="determinate" style="width: 70%"></div>
            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: 'collections-status',
    data() {
      return {
        info: null
      }
    },
    methods: {
      getScore(val) {
        return val.toFixed(2);
      },
    },
    mounted() {
      axios
        .get('https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$select=status,count(*)&$where=borough=%27BRONX%27&$group=status&$limit=5&$order=count(*) desc')
        .then(response => {
          this.info = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  .collections-title,
  .collections-content {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .task-cat {
    font-size: .8rem;
    font-weight: 300;
    padding: 2px 4px;
    color: #fff;
    border-radius: 2px;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }

  .row {
    margin: 0px;
  }
</style>
