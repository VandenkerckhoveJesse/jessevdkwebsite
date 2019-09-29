<template>
  <aside>
    <a href="https://play.google.com/store/apps/details?id=consumeeApp.howest.consumeenativeapp&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noopener noreferrer">
      <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" width="200">
    </a>
    <h1>Consume Aware</h1>
    <div>
      <p>I had to complete a international project for school and you had a list of countries. I chose the country i knew
      the least about so i could learn as much as possible. The objective was to complete a application that a other group
      had already started. The project was in a really bad state so we had to make sure it looked presentable in less then
      a week. We needed to make 3 things: a quiz game which had to be a PWA, a website so the users could easily navigate
      and a e book where all of the courses, powerpoints and videos where stored. This project was co-funded by the
      Erasmus+ Programme of the European Union.</p>
    </div>

    <h2>The technology</h2>
    <div>
      <img src="../../assets/images/projects/consumewebsite.png" alt="">
      <p>For the website we used google's responsive front-end framework Materialize. Because of this we could develop
      the website faster and made it easier to work with on as a group because some people where not that comfortable in
      front-end development.</p>
      <img src="../../assets/images/projects/consumeapp.png" alt="">
      <p>For the quiz game we used a PWA, a application on the web. Its  always reliable even if there is not a connection.
        Its also very fast so it has to respond quickly to user interactions and it has to be engaging.
      </p>
      <img src="../../assets/images/projects/consumeebook.png" alt="">
      <p>
        Finally for the e-book we used javascript and a Javascript utility named PDFObject so its easier to display pdfs,
        videos and powerpoints.
      </p>
    </div>

    <h2>What did i learn?</h2>
    <div>
      <p>We had to work together with people we have never met, this wasnt really the challenge thought. They spoke a
      completely different language and the culture there varies a lot compared to Belgium. And if that was not enough
      they had no knowledge of IT because they where Business students. It was a awesome oppurtinity and i have definitely
      learned a lot and i met a lot of new awesome people. We also did some fun activities after our work days and this
      definitely made us stronger as a collective.</p>
    </div>
    <a href="https://play.google.com/store/apps/details?id=consumeeApp.howest.consumeenativeapp&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noopener noreferrer">
      <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" width="200">
    </a>

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
  margin-bottom: 15px;
  text-align: justify;
}
img{
  margin: 3px;
  max-height: 300px;
  max-width: 300px;
}
h1{
  font-size: 1.8rem;
}

</style>
