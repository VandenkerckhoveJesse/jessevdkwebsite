<template>
    <article>
        <img :src="require(`../../assets/images/projects/${project.image}`)" alt="">
        <div>
            <h2>{{project.name}}</h2>
            <p>{{project.summary}}</p>
            <aside>{{project.aside}}</aside>
            <a href="" class="button">More</a>
        </div>
    </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media screen and (max-width: 800px) {
        article{
            flex-direction: column;
            justify-content: space-between;
            left: 0 !important;
            height: 340px !important;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        img{
            position: static !important;
            height: 150px !important;
        }
        article>div{
            height: auto !important;
            margin: 0 !important;
        }
    }

    article{
        position: relative;
        max-width: 900px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        background-image: linear-gradient(to right, #38d39f 0%, #38d39f 5%, white 5%, white 95%, #38d39f 95%, #38d39f 100%);
        margin-bottom: 70px;
        margin-top: 70px;
        height: 200px;
    }
    article div{
        padding-left: 7%;
        padding-right: 7%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    img{
        position: absolute;
        height: 280px;
        border-radius: 100%;
    }
    h2{
        margin: 0;
        font-weight: 500;
    }
    p{
        margin: 0;
        font-weight: 400;
    }
    aside{
        font-weight: 300;
    }
    a{
        font-size: 21px;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
    }

</style>
