<template>
  <aside>
    <h1>Tile Game</h1>
    <div>
      <p>The task for this project was to create something using canvas, javascript and php. For this demo i removed
      everything including the php backend and made it singleplayer so its easier to showcase the game. So whats left
      is a singleplayer game working with tiles where you can walk around.</p>
    </div>

    <h2>The technology</h2>
    <div>
      <img src="../../assets/images/projects/canvas.png" alt="">
      <p>At first my game had a backend and you could play with your friends, there was also a portal and a wiki where
      you could find information about things in the game. But the coolest part of this project was the game itself, you
      could walk around and explore the custom map i made myself. So i took that part and removed the rest.</p>
      <p>So the part that is left is a simple canvas in the html and a lot of javascript files which make sure the map
        and players get displayed. I used classes to make everything very neat and easy to read.
      </p>
    </div>

    <h2>What did i learn?</h2>
    <div>
      <p>I learned that something that is hard is still possible, you have to divide the big problem in small ones and
      start with small solutions. Eventually the entire application works. Divisions of responsibility within the classes. </p>
    </div>

  </aside>

</template>

<script>
    export default {
        name: 'ThisWebsite'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
aside{
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div{
  max-width: 600px;
  margin: 5px;
  margin-bottom: 15px;
}
p{
  margin-bottom: 10px;
  text-align: justify;
}
img{
  margin: 5px;
  float: left;
  height: 300px;
  width: 300px;
}
h1{
  font-size: 1.8rem;
}

</style>
