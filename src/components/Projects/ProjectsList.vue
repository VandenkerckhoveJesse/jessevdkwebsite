<template>
    <div>
        <Project v-for="project in projects" v-bind:project="project"></Project>
    </div>

</template>

<script>
import data from '../../data/data'
import Project from './Project'

export default {
  name: 'ProjectsList',
  components: {
      Project
  },
  props: {
  },
  data() {
      return {
          projects : data.projects
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    article:nth-child(even){
        right: 40px;
    }
    article:nth-child(even) div{
        margin-right: 140px !important;
    }
    article:nth-child(even) img{
        right:-80px;
    }

    article:nth-child(odd){
        left: 40px;
    }
    article:nth-child(odd) div{
        margin-left: 140px !important;
    }
    article:nth-child(odd) img{
        left:-80px;
    }

</style>
