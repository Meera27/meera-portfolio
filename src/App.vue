<template>

  <div id="app">
    <NavBarComponent />
    
    <section id="home">
      <home-component/>
    </section>
    
    <section id="about">
      <about-component />
    </section>
    
    <section id="projects">
      <ProjectsComponent />
    </section>
    <experience-component/> 
    <FooterComponent />   
    <SocialIcons/>
  </div>

</template>

<script>

import ExperienceComponent from './components/ExperienceComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SocialIcons from './components/SocialIcons.vue';
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { onMounted } from 'vue'

export default({
  name: 'App',
  components: {
    NavBarComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    FooterComponent,
    SocialIcons
  },
  setup() {
    onMounted(() => {
      const scrollEl = document.querySelector('#app')
      new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.05 // lower = slower
      })
    })

    return {}
  }
})
</script>

<style>
</style>
