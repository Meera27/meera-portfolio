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
    
    <!-- Any other sections or components -->
  </div>

</template>

<script>
// import AboutComponent from './components/AboutComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SocialIcons from './components/SocialIcons.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    FooterComponent,
    SocialIcons
  },
};
</script>
