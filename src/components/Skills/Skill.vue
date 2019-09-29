<template>
    <li class="skill">
        <img :src="require(`../../assets/images/skills/${skill.image}`)" alt="">
        <div>
            <h2>{{skill.name}}</h2>
            <p>{{skill.text}}</p>
            <div :id="this.name">

            </div>
            <!--a href="" class="button">view</a-->
        </div>
    </li>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: Object
  },
  computed: {
      name: function () {
          return this.skill.name.replace('.', '')
      }
  },
  mounted() {

      let div = document.querySelector('#'+this.name);
      for(let i=1;5 >= i; i++) {
          if(i <= this.skill.level){
              div.innerHTML += "<svg class='green'></svg>"
          } else{
              div.innerHTML += "<svg></svg>"
          }

      }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .skill svg{

        background-color: #b0b0b0;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        margin-left: 3px;
        margin-right: 3px;
    }
    .skill .green{
        background-color: lightgreen;
    }
</style>
<style scoped>

li>div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between !important;
}

ul{
    display: flex;
}
li{
    display: flex;
    background-color: white;
    border-radius: 500px 50px 50px 500px;
    height: 150px;
    width: 350px;
}
img{
    height: 150px;
    width: auto;
    border-radius: 500px;
}

</style>
