<template>
  <header>
    <h1><router-link to="/">jessevdk.be</router-link></h1>
    <Slider :width="300" format="overlay" direction="right" :opacity="0.15" color="red" :links="[{'id':1, 'text':'Link1', 'url': 'https://github.com'}]"></Slider>
    <nav id="links">
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

  </header>
</template>

<script>
import Slider from '../components/Slider'

export default {
  name: 'Head',
  components: {
    Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 900px) {
  header>div{
    display: block !important;
  }
  #links {
    display: none;
  }
}

header>div{
  display: none;
}

header {
  display: flex;
  justify-content: space-between;
  padding-top: 2vh;
  padding-left: 5%;
  padding-right: 5%;
  height: 8vh;
}
h1{
  background-image: url("../assets/images/backgrounds/header.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 15px;
  margin-top: -15px;
  padding-left: 10%;
  margin-left: -10%;
  padding-right: 20%;
  margin-right: -20%;
  padding-bottom: 20%;
  margin-bottom: -20%;
}
nav{
  width: 50%;
  display: flex;
  justify-content: space-around;
}
h1 a{
  font-weight: 700;
  color: white;
  font-size: 2rem;
}
a{
  margin-left: 5px;
  margin-right: 5px;
  color: #707070;
  text-decoration: none;
  font-size: 1.3rem;
}
</style>
