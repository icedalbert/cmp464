<template>
  <div class="card-stats">
    <div id="card-stats">
      <div class="row">
        <section v-if="errored">
          <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
          <div v-if="loading">Loading...</div>
          <div v-for="item in info" class="col s12 m6 l2">
            <div class="card animate fadeLeft">
              <div class="card-content cyan white-text">
                <p class="card-stats-title"><i class="material-icons">person_outline</i> {{ item.borough }}</p>
                <h4 class="card-stats-number white-text">{{ Number(item.count).toLocaleString() }}</h4>
                <!--
                <p class="card-stats-compare">
                  <i class="material-icons">keyboard_arrow_up</i> 15%
                  <span class="cyan text text-lighten-5">from yesterday</span>
                </p>
                -->

              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'home',
    data() {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    filters: {
      currencydecimal: function (value) {
        return value.toFixed(2)
      }
    },
    mounted() {
      axios
        .get('https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$query=select borough, count(*) as count group by borough order by borough')
        .then(response => {
          this.info = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }
</script>

<style scoped>
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
