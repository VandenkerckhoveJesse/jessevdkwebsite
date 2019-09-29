<template>
  <main>
    <div id="text">
      <h1>{{title}}</h1>
      <p>
        {{text}}
      </p>
      <router-link class="button" to="/contact">Contact</router-link>
      <router-link v-if="hasCV" class="button white-button" to="/cv">CV</router-link>
    </div>
    <div id="image">
      <img :src="require(`../assets/images/backgrounds/${imageLink}`)" alt="">
    </div>
    <ScrollIndicator></ScrollIndicator>
  </main>
</template>

<script>
    import ScrollIndicator from '../components/ScrollIndicator'
export default {
  name: 'LandingPage',
  components: {
      ScrollIndicator
  },
  props: {
      title: {
        type: String
      },
      text: {
        type: String
      },
      hasCV: {
        type: Boolean,
        default: true
      },
      imageLink: {
          type: String,
          default: "home.png"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  #image img{
    height: 100%;
    width: auto;
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
div{
  width: 700px ;
}

img {
  position: relative;
  display: block;
  width: 120%;
  right: 7%;
  height: auto;
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
