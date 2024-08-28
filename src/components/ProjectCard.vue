<template>
  <div class="bg-[#262A2E] overflow-hidden shadow-lg border border-gray-700 w-full h-full relative group">
    <img :src="projectImage" :alt="project.name" class="w-full h-full object-cover">
    <div 
      class="absolute inset-0 bg-[#262A2E] bg-opacity-95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
    >
      <h3 class="text-xl font-semibold mb-4 text-center text-white">{{ project.name }}</h3>
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        <span v-for="skill in project.skills" :key="skill" class="bg-gray-700 text-xs sm:text-sm text-cyan-400 px-2 py-1">
          {{ skill }}
        </span>
      </div>
      <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="github-button text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300">
        GitHub
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    projectImage() {
      try {
        return require(`@/assets/${this.project.image}`)
      } catch (e) {
        return require('@/assets/unnamed.jpg')
      }
    }
  }
}
</script>

<style scoped>
.github-button {
  position: relative;
}

.github-button::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #00FFFF;
  transition: width 0.3s ease;
}

.github-button:hover::after {
  width: 100%;
}
</style>


