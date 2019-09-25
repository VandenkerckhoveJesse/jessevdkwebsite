<template>
  <div>
    <LandingPage title="Curriculum vitae"
                 text="A brief listing of my academic diploma's, work experience, certificates and projects I was involved with. Background and skills are also listed."
                 imageLink="cv.png"
    >

    </LandingPage>
    <div id="more" class="darkBackground">
      <embed id="pdf" src="CV Jesse Vandenkerckhove.pdf" type="application/pdf">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/LandingPage';

export default {
  name: 'CV',
  components: {
      LandingPage
  },
  mounted() {

  }

}
</script>

<style scoped>

  #pdf{
    height: 95%;
    width: 80%;
    max-width: 800px;

  }

  #more{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
