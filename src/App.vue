<template>
  <div id="app">
    <NavBarComponent />
    <home-component/>
    <about-component />
    <ProjectsComponent />
    <experience-component/>    
    <SocialIcons/>
  </div>
</template>

<script>
// import AboutComponent from './components/AboutComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
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
    SocialIcons
  },
};
</script>
