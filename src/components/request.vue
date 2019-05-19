<template>
  <div class="col s12 m6 l12">
    <div class="card subscriber-list-card animate fadeRight">
      <div class="card-content pb-1">
        <h4 class="card-title mb-0">Request List <i class="material-icons float-right">more_vert</i></h4>
      </div>
      <table class="subscription-table responsive-table highlight">
        <thead>
          <tr>
            <th>Agency</th>
            <th>Agency Name</th>
            <th>Complaint Type</th>
            <th>Description </th>
            <th>Status</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info">
            <td>{{ item.agency}}</td>
            <td>{{ item.agency_name}}</td>
            <td>{{ item.complaint_type }}</td>
            <td>{{item.descriptor }}</td>
            <td><span class="badge pink lighten-5 pink-text text-accent-2">{{ item.status }}</span></td>
            <td>{{ item.incident_zip }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'request',
    data() {
      return {
        info: null
      }
    },
    mounted() {
      axios
        .get('https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$where=borough=%27BRONX%27&$limit=50')
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
  .card .card-content {
    padding: 0px;
    padding-top: 1px;
    padding-left: 10px;
  }
</style>
