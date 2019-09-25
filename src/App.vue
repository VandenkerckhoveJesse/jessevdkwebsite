<template>
  <div id="app">
    <Head></Head>
    <router-view/>
    <Footer></Footer>
  </div>
</template>


<script>
    import Head from './components/Head';
    import Footer from './components/Footer'

    export default {
        components: {
            Head,
            Footer
        }
    };
</script>


<style>
/*App Styling*/
#app {
  font-family: "Montserrat",'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6f6f6f;
}
body{
  margin: 0;


  /**/
  /*color: black;
  color: #2c3e50;
  color: #707070*/
}

/*Text Styling*/
h1{

}
h2{

}
p{

}

/*Button Styling*/
.button{
  font-family: "Montserrat",'Avenir', Helvetica, Arial, sans-serif;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 8px;
  margin: 5px;
  color: white;
  background-color: #38d39f;
  border: solid 1px #38d39f;
  border-radius: 50px;
}
.white-button{
  color: #707070;
  border-color: #707070;
  background-color: white;
}

/*More Styling*/
#more div{
  justify-content: center;
  margin: 10px;
}
.darkBackground{
  background: url("assets/images/backgrounds/dark.png"), linear-gradient(left, #7b7b7b, #7b7b7b);
  background-position: top, 0 400px;
  padding-top: 220px;
  margin-top: -220px;
  background-size: auto;
  background-repeat: no-repeat;
}
.lightBackground {
  background: url("assets/images/backgrounds/light.png"), linear-gradient(left, #c4c4c4, #c4c4c4);
  background-position: top, 0 400px;
  padding-top: 220px;
  margin-top: -220px;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap');
</style>
