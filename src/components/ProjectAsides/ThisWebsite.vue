<template>
  <aside>
    <h1>This Website</h1>
    <div>
      <p>I wanted to create something where people could easily see what i have made. But eventually it became much more.
        I kept adding more and more and now its more then just my projects. This was a lot of work and i am very happy with
        the result.</p>
    </div>

    <h2>The technology</h2>
    <div>
      <img src="../../assets/images/projects/vue.png" alt="">
      <p>The technology i used to create this master peace is Vue.js. The youngest of the familly of front end frameworks,
        its brothers are already very popular and you probably already heard of them (Angular and React).</p>
      <p>I decided to use Vue because its very modular. The html, css and javascript of a piece of the website is al in
        the same file. Routing is also very easy its also a single page application so there is no loading between pages.
        And to top it all off it has awesome helper tags.
      </p>
    </div>

    <h2>What did i learn?</h2>
    <div>
      <p>This is a project i have been working on for a while now, always improving the website and adding new stuff.
        Its a very nice feeling to see it growing from design to actual website. I also used some animations for the first
        time. I am still working on adding more so if you come back in a month or two this website will be a lot bigger and
        better.</p>
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
