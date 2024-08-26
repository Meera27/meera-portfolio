<template>
  <div class="bg-[#1F2226] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-700 w-full max-w-sm relative group">
    <img :src="projectImage" :alt="project.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2 text-center">{{ project.name }}</h3>
      <div class="flex flex-wrap justify-center gap-1">
        <span v-for="skill in project.skills" :key="skill" class="bg-gray-700 text-xs text-cyan-400 px-2 py-1 rounded">
          {{ skill }}
        </span>
      </div>
    </div>
    <div 
      class="absolute inset-0 bg-[#1F2226] bg-opacity-95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <p class="text-white text-center p-4 mb-4 whitespace-pre-line">
        {{ project.explanation }}
      </p>
      <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="github-button text-sm text-white">
        Github
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
