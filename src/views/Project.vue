<template>
  <div>
    <main>
      <div id="text">
        <h1>{{project.name}}</h1>
        <p>{{project.summary}}</p>
        <router-link v-if="project.link"  class="button" to="/contact">View</router-link>
        <router-link v-if="project.git" class="button white-button" to="/cv"><img id="gitlab" src="../assets/images/github.png" alt="">Code</router-link>
      </div>
      <div id="image">
        <img id="projectImg" :src="require(`../assets/images/projects/${project.image}`)" alt="">
      </div>
      <ScrollIndicator></ScrollIndicator>
    </main>
    <router-view class="lightBackground"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import ScrollIndicator from '../components/ScrollIndicator'
import data from '../data/data'

export default {
  name: 'Project',
  components: {
      ScrollIndicator
  },
  computed: {
      // a computed getter
      projectName: function () {
          let array = this.$route.path.split('/');
          return array[array.length-1].toLowerCase();
      },
      project: function() {
          let project;
          const name = this.projectName.trim();
          this.projects.forEach(function(p){
              const lowerCase = p.name.toLowerCase().trim();
              if(lowerCase==name){
                  project = p;
              }
          });
          return project;
      }
  },
  data(){
      return {
          projects : data.projects
      };
  }

}
</script>

<style scoped>
  @media screen and (max-width: 800px) {
    main{
      flex-direction: column;
      height: 65vh;
      padding-top: 5vh;
      padding-bottom: 5vh;
    }
    #text{
      height: 50%;

      width: auto;
    }

    #image{
      height: 50%;
    }

    #projectImg{
      height: 100% !important;
      width: auto !important;

      position: static;
      margin-left: auto;
      margin-right: auto;
    }

    h1{
      font-size: 1.8rem !important;
    }
    p{
      font-size: 1.1rem !important;
    }
  }


  a{
    position: relative;
  }

  #gitlab{
    top: 5px;
    position: relative;
    height: 30px;
    width: 30px;
    margin: 0;
    margin-bottom: auto;
  }

  aside{
    min-height: 100vh;
  }

  main *{
    margin: 5px;

  }

  h1{
    font-size: 2.5rem;
  }
  p{
    font-size: 1.5rem;
    margin-bottom: 25px !important;
  }

  main>div{
    width: 700px ;
  }

  #image img {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 500px;
    width: 500px;
    border-radius: 100%;
  }
  main{
    margin-top:0;
    overflow: hidden;
    height: 75vh;
    margin-bottom: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /*flex-wrap: wrap;*/
    /*flex-wrap: wrap;*/
  }

</style>
