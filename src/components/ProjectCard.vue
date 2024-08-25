<template>
    <div class="bg-[#1F2226] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-700 w-full max-w-sm">
      <img :src="projectImage" :alt="project.name" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2 text-center">{{ project.name }}</h3>
        <div class="flex flex-wrap justify-center gap-1">
          <span v-for="skill in project.skills" :key="skill" class="bg-gray-700 text-xs text-cyan-400 px-2 py-1 rounded">
            {{ skill }}
          </span>
        </div>
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
  