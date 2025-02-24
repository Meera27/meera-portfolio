<template>

  <div id="app">
    <SocialIcons :in-footer="false" />
    <AsteroidsComponent />
    <NavBarComponent />
    
    <section id="home">
      <home-component/>
    </section>

    <section id="skills">
      <SkillsComponent/>
    </section>
    
    <section id="about">
      <about-component />
    </section>
    
    <section id="projects">
      <ProjectsComponent />
    </section>

    <ExperienceComponent/>
    <EducationComponent/>
    <FooterComponent />   
  </div>

</template>

<script>

import AsteroidsComponent from './components/AsteroidsComponent.vue';
import EducationComponent from './components/EducationComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SocialIcons from './components/SocialIcons.vue';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { onMounted } from 'vue';


export default({
  name: 'App',
  components: {
    NavBarComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    AsteroidsComponent,
    FooterComponent,
    SocialIcons
  },
  setup() {
    onMounted(() => {
      const scrollEl = document.querySelector('#app')
      new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.07
      })
    })

    return {}
  }
})
</script>

<style>
#app{
  background-color: #1F2226;
}
</style>
