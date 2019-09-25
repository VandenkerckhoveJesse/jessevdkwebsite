d<template>
  <div>
    <LandingPage title="About me"
                 text="Thank you for showing interest, here I will share a little about me as a person."
                 imageLink="about.png"
    >
    </LandingPage>
    <div id="more" class="lightBackground">
      <div>
        <img id="profilepic" src="../assets/images/ProfilePic.png" alt="">
        <img id="belgium" src="../assets/images/belgium.png" alt="">
      </div>

      <table>
        <tr>
          <th>Age</th>
          <td>20</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>Belgium</td>
        </tr>
        <tr>
          <th>Occupation</th>
          <td>Software Engineer Student</td>
        </tr>
        <tr>
          <td colspan="2">I always was interested in how electrical stuff worked so I started with electrics in school.
            Later in life I was intrigued with computers and how to control them. With programming you can make something
            beatufull with just your imagination and your computer.</td>
        </tr>
      </table>
    </div>
    <!--div id="hobbys">
      <h2>Hobbys</h2>
      <Carousel></Carousel>
    </div-->
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/LandingPage';
import Carousel from '../components/About/Carousel.vue'

export default {
  name: 'About',
  components: {
      LandingPage,
      Carousel
  }

}
</script>

<style scoped>
  @media screen and (max-width: 800px) {
    #more{
      flex-direction: column;
    }
    table{
      padding: 15px;
      width: auto !important;
    }
  }


  #belgium {
    height: 80px;
    width: 80px;
    position: absolute;
    top: 215px;
    right: 0px;
    border-radius: 100%;
  }
  table{
    color: black;
    width: 30%;
    margin: 15px;
  }
  #profilepic{
    height: 280px;
    width: 280px;
    border-radius: 100%;
    margin: 15px;
  }
  #more{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #more div{
    position: relative;
    justify-content: center;
    margin: 10px;
  }
  #more{
    height: 100vh;
  }
  #hobbys{
    height: 100vh;
  }

</style>
