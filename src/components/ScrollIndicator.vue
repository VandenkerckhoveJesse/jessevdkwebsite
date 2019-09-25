<template>
  <div id="scroll">
    <div id="mouse">
      <div id="wheel"></div>
    </div>
    <p>More</p>
  </div>
</template>

<script>
export default {
  name: 'ScrollIndicator',
  data() {
      return{
          atBottom: false
      }
  },
  methods: {
      checkIfAtBottom(){
          const scroll = document.querySelector("#scroll");
          if((window.innerHeight + window.scrollY) >= document.body.scrollHeight-1) {
              if(this.atBottom === false) {
                  scroll.style.opacity = 0;
              }
              this.atBottom = true;
          } else{
              if(this.atBottom === true) {
                  scroll.style.opacity= 100;
              }
              this.atBottom = false;
          }
      }
  },
  mounted: function() {
      console.log("mounted");
      window.addEventListener('scroll', this.checkIfAtBottom);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #scroll{
    z-index: 1;
    position: fixed;
    left: 50%;
    width: 50px;
    margin-left: -25px;
    top: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
  #scroll{
    color: white;
  }

  #scroll p{
    margin-top: 5px;
    font-weight: 700;
  }
  #mouse{
    border: solid 1px #7b7b7b;
    background-color: white;
    border-radius: 100px;
    width: 35px;
    height: 60px;
    text-align: center;
  }
  #wheel{
    display: block;
    height: 27px;
    width: 27px;
    border-radius: 100%;
    background-color: #7b7b7b;
    animation: 3s ease infinite scroll-indicator;
    margin-left: auto;
    margin-right: auto;
  }

  @keyframes scroll-indicator {
    0% {
      margin-top: 30px;
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    100% {
      margin-top: 2px;
      opacity: 0;
    }
  }
</style>
