<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="flex justify-between items-center bg-[#1F2226] text-white px-6 py-3">
      <div class="logo">
        <!-- <span class="text-2xl font-bold">m<span class="text-[#00FFFF]">.</span></span> -->
        <img src="title.png" alt="logo" class="logo-image">
      </div>
      <ul class="nav-links flex space-x-8">
        <li><a href="#home" :class="['nav-link', { 'active': activeSection === 'home' }]" @click="setActiveSection('home')">HOME</a></li>
        <li><a href="#about" :class="['nav-link', { 'active': activeSection === 'about' }]" @click="setActiveSection('about')">ABOUT</a></li>
        <li><a href="#projects" :class="['nav-link', { 'active': activeSection === 'projects' }]" @click="setActiveSection('projects')">PROJECTS</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      activeSection: 'home',
      sections: ['home', 'about', 'projects']
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section
    },
    onScroll() {
      const scrollPosition = window.scrollY
      for (let i = this.sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(this.sections[i])
        if (section && section.offsetTop <= scrollPosition + 60) { // 60px offset for navbar height
          this.activeSection = this.sections[i]
          break
        }
      }
    }
  }
}
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease-in-out;
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00FFFF;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #00FFFF;
}

.logo {
  font-family: 'Figtree', sans-serif;
}
.logo-image {
  height: 35px; 
  width: auto; 
}

@media (max-width: 640px) {
  nav {
    padding: 0.75rem 1rem;
  }
  
  .nav-links {
    gap:1rem;
  }
  
  .nav-link {
    font-size: 0.8rem;
  }
  .logo-image {
    height: 25px; 
  }
}
</style>