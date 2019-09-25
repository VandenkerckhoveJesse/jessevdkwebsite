<template>
  <div>
    <LandingPage title="My skills"
                 text="A small look into what I can do, here I list some of my programming skills but also languages and other things."
                 imageLink="skills.png"
    >
    </LandingPage>

    <div id="more" class="lightBackground">
      <SkillsList/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/LandingPage';
import SkillsList from '../components/Skills/SkillsList'

export default {
  name: 'Skills',
  components: {
      LandingPage,
      SkillsList
  }

}
</script>

<style scoped>
  #more{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;

  }

  #more div{
    position: relative;
    justify-content: center;
    margin: 10px;
  }

  #more{
    min-height: 100vh;
  }
</style>
