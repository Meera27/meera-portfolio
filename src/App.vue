<template>
  <div id="app">
    <NavBarComponent />
    <router-view />
    <SocialIcons/>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import SocialIcons from './components/SocialIcons.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
    SocialIcons
  },
};
</script>
