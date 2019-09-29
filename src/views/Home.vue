<template>
  <div id="home">
    <LandingPage title="Programming, my passion"
                 text="Hello and welcome to my website, my name is Jesse Vandenkerckhove and study Applied informatics with specialisation
                 Software Engineer. Here you will find my projects, skills and much more."
    >
    </LandingPage>
    <div id="more" class="darkBackground">
      <div id="row">
        <div class="card">
          <img src="../assets/images/backgrounds/skills.png" alt="">
          <h2>Skills</h2>
          <p>Learn more of my programming and other skills</p>
          <router-link to="/skills" class="button">View</router-link>
        </div>
        <div class="card">
          <img src="../assets/images/backgrounds/about.png" alt="">
          <h2>About me</h2>
          <p>A little about me as a person, and about my hobbies</p>
          <router-link to="/about" class="button">View</router-link>
        </div>
      </div>
      <img id="profilepic" src="../assets/images/ProfilePic.png" alt="">
    </div>
    <!--div id="projects"></div-->
    <ContactForm class="lightBackground"></ContactForm>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/LandingPage';
import ContactForm from '../components/Contact/ContactForm'

export default {
  name: 'Home',
  components: {
      LandingPage,
      ContactForm
  }

}
</script>

<style scoped>



  #profilepic{
    height: 200px;
    width: 200px;
    border-radius: 100%;
    position: relative;
    bottom: 100px;
  }



  #row{
    max-width: 900px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .button{
    width: 125px;
    margin-left: auto;
    margin-right: auto;
  }

  .card{
    display: flex;
    flex-direction: column;
    height: 65vh;
    width: 50%;
    border-radius: 14px;
    background-color: #D8D8D8;
  }
  .card img{
    margin-left: auto;
    margin-right: auto;
    max-height: 220px;
    max-width: 85%;
  }

  #home > div {
    height: 100vh;
  }

</style>
