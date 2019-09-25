d<template>
  <div>
    <LandingPage title="My projects"
                 text="Here are all of the things i am proud of making or being a part of making."
                 imageLink="projects.png"
    >
    </LandingPage>
    <div id="more" class="lightBackground">
      <ProjectsList></ProjectsList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/LandingPage';
import ProjectsList from '../components/Projects/ProjectsList'
export default {
  name: 'Projects',
  components: {
      LandingPage,
      ProjectsList
  }

}
</script>

<style scoped>
  #more{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #more{
    min-height: 100vh;
  }

</style>
