<template>
  <div id="contactForm">
    <div id="text">
      <h1>Contact</h1>
      <form action="">
        <label for="subject">Subject</label>
        <input id="subject" type="text" placeholder="Subject">
        <label for="name" >Name</label>
        <input id="name" type="text" placeholder="Name">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
      </form>
      <button v-on:click="send()" class="button">Send</button>
      <router-link v-if="hasCv" class="button white-button" to="/cv">CV</router-link>
    </div>
    <div id="image">
      <img src="../../assets/images/backgrounds/contact.png" alt="">
    </div>


  </div>
</template>

<script>

export default {
  name: 'ContactForm',
  methods: {
      send(){
          const subject = document.querySelector('#subject').value;
          const name = document.querySelector('#name').value;
          const message = document.querySelector('#message').value;
          window.open(`mailto:contact@jessevdk.be?subject=${subject} - ${name}&body=${message}` )
      }
  },
  props: {
      hasCv: {
          type: Boolean,
          default: false
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 800px) {
    #image{
      display: none;
    }
    #text{
      background-image: url("../../assets/images/backgrounds/contact.png");
      background-size: cover;
      background-position: center;
      padding-top: 10%;
      padding-bottom: 10%;
    }

    input, textarea{
      opacity: 0.9;
    }

  }





  h1{
    font-size: 2.5rem;
  }
  p{
    font-size: 1.5rem;
  }
  #contactForm>div{
    width: 700px ;
  }

  img {
    position: relative;
    display: block;
    width: 120%;
    right: 10%;
    height: auto;
  }
  #contactForm{
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;

  }
  form{
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }
  input, textarea{
    font-size: 1.2rem;
    font-family: "Montserrat",'Avenir', Helvetica, Arial, sans-serif;
    padding: 5px;
    border: none;
    border: 1px solid #6f6f6f;
    border-radius: 5px;
    margin-bottom: 5px;
  }

</style>
