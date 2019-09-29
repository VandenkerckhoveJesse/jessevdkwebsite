import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import CV from './views/CV.vue'
import Project from './views/Project.vue'
import ThisWebsite from './components/ProjectAsides/ThisWebsite.vue'
import TileGame from './components/ProjectAsides/TileGame.vue'
import ConsumeAware from './components/ProjectAsides/ConsumeAware.vue'

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
          path: '/projects',
          name: 'projects',
          component: Projects
      },
      {
          path: '/skills',
          name: 'skills',
          component: Skills,
      },
      {
          path: '/cv',
          name: 'cv',
          component: CV
      },
      {
          path: '/projects',
          name: 'project',
          component: Project,
          children: [
              {
                  path: 'this website',
                  component: ThisWebsite
              },
              {
                  path: 'tile game',
                  component: TileGame
              },
              {
                  path: 'consume aware',
                  component: ConsumeAware
              },
          ]
      }

  ]
})
