<template>
  <footer>
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <div>
      <p id="madeBy">Made by <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/jvdk">Jesse Vandenkerckhove</a></p>
      <img src="../assets/images/logo.png" alt="">
      <p id="imagesBy">Images by <a target="_blank" rel="noopener noreferrer" href="//undraw.co">undraw.co</a></p>
    </div>

  </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 800px) {
    footer{
      margin-top: -130px !important;
      padding-top: 130px !important;
    }

    p{
      width: 45% !important;
    }

  }

  footer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    background-color: inherit;
    margin-top: -80px;
    padding-top: 130px;
    padding-bottom: 40px;
    background-image: url("../assets/images/backgrounds/footer.png");
  }
  nav{
    margin-bottom: 20px;
    width: 40%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  a{
    color: #000000;
  }

  nav>a{
    font-size: 22px;
    color: #6f6f6f;
    width: 100px;
    margin: 5px;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    width: 20%;
    margin: 5px;
  }
  img{
    width: 8%;
  }

  #madeBy{
    text-align: right;
  }

  #imagesBy{
    text-align: left;
  }

</style>
