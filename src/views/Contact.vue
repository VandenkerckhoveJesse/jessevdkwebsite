<template>
  <div>

    <ContactForm :hasCv="true"></ContactForm>
    <ScrollIndicator></ScrollIndicator>
    <div id="more" class="darkBackground">
      <ul>
        <li><img src="../assets/images/linkedin.png" alt=""><a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/jvdk">Jesse Vandenkerckhove</a></li>
        <li><img src="../assets/images/mail.png" alt=""><a target="_blank" rel="noopener noreferrer" href="mailto:contact@jessevdk.be">contact@jessevdk.be</a></li>
        <li><img src="../assets/images/facebook.png" alt=""><a target="_blank" rel="noopener noreferrer" href="//facebook.com/jesse.vandenkerckhove">Jesse Vandenkerckhove</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '../components/Contact/ContactForm';
import ScrollIndicator from '../components/ScrollIndicator'
import LandingPage from '../components/LandingPage'

export default {
  name: 'Contact',
  components: {
      ContactForm,
      ScrollIndicator,
      LandingPage
  }

}
</script>

<style scoped>

  ul{
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0
  }

  #contactForm{
    height: 75vh;
    padding-bottom: 15vh;
  }

  li{

    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  a{
    color: white;
    font-weight: 500;
  }

  img{
    height: 60px;
  }

</style>
