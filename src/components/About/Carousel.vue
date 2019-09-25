<template>
    <div class="carousel">
        <button v-on:click="previous()" class="carousel_button" id="carousel_button_left"><</button>
        <div class="carousel_track-container">
            <ul class="carousel_track">
                <!--li class="carousel_slide current-slide">
                    <img class="carousel_image" src="../../assets/ProfilePic.png" alt="">
                </li>
                <li class="carousel_slide">
                    <img class="carousel_image" src="../../assets/contactbackground.png" alt="">
                </li>
                <li class="carousel_slide">
                    <img class="carousel_image" src="../../assets/skillsbackground.png" alt="">
                </li-->
            </ul>
        </div>
        <button v-on:click="next()" class="carousel_button" id="carousel_button_right">></button>
        <div class="carousel_nav">
            <button class="carousel_indicator">1</button>
            <button class="carousel_indicator">2</button>
            <button class="carousel_indicator">3</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    msg: String
  },
  methods:{
      init(){
          window.addEventListener('resize', this.sizeSlides);
          this.sizeSlides();
      },
      sizeSlides(){
          console.log("dd");
          let width = this.slides[0].offsetWidth;
          this.slides.forEach((slide, index) => {
              slide.style.left = width * index +'px';
          })
      },
      next(){
          const currentSlide = this.track.querySelector('.current-slide');
          const nextSlide = currentSlide.nextElementSibling;
          const amountToMove = nextSlide.style.left;
          this.track.style.transform = 'translateX(-'+ amountToMove +')';
          currentSlide.classList.remove('current-slide');
          nextSlide.classList.add('current-slide');
      },
      previous(){
          const currentSlide = this.track.querySelector('.current-slide');
          const previousSlide = currentSlide.previousElementSibling;
          const amountToMove = previousSlide.style.left;
          this.track.style.transform = 'translateX(+'+ amountToMove +')';
          currentSlide.classList.remove('current-slide');
          previousSlide.classList.add('current-slide');
      }

  },
  mounted(){
      this.init()
  },
  data(){
      return{
          currentSlide: 0
      }
  },
  computed: {
      track: function() {
          return document.querySelector('.carousel_track')
      },
      slides: function() {
          return Array.from(this.track.children);
      },
      nextButton: function(){
          return document.querySelector('#carousel_button_right')
      },
      previousButton: function () {
          return document.querySelector('#carousel_button_left')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .carousel {
        position: relative;
        height: 600px;
        width: 80%;
        margin: 0 auto;
    }

    .carousel_image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carousel_track-container {
        background: lightgreen;

        height: 100%;
        position:relative;
    }

    .carousel_track {
        padding: 0;
        margin:0;
        list-style: none;
        position:relative;
        height: 100%;
        transition: transform 250ms ease-in;
    }

    .carousel_slide {
        position: absolute;
        top: 0;
        bottom:0;
        width: 100%

    }

    .carousel_button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }

    #carousel_button_left {
        left: -40px;
    }

    #carousel_button_right {
        right: -40px;
    }

    #carousel_nav{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #carousel_indicator {
        border: 0;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: purple;
    }

</style>
