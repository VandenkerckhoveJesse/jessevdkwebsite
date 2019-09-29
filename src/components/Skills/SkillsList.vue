<template>
    <div>
        <h2>Languages</h2>
        <ul>
            <Skill v-for="language in languages" :skill="language"/>
        </ul>
        <!--h2>Certificates</h2>
        <ul>
            <Skill v-for="certificate in certificates" :skill="certificate"/>
        </ul-->
        <h2>Skills</h2>
        <ul>
            <Skill v-for="skill in skills" :skill="skill"/>
        </ul>

    </div>

</template>

<script>
import data from '../../data/data'
import Skill from './Skill'

export default {
  name: 'SkillsList',
  components: {
      Skill
  },
  props: {
  },
  data() {
      return {
          languages : data.skills.languages,
          certificates: data.skills.certificates,
          skills: data.skills.skills
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
div{

    width: 95%;

}

ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

li{
    margin: 12px;
}

h2{
    margin-bottom: 10px;
    margin-top: 40px;
}


</style>
