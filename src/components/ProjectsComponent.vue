<template>
    <div class="bg-[#1E2024] text-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- First row: 3 projects -->
          <ProjectCard
            v-for="project in firstRowProjects"
            :key="project.name"
            :project="project"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Second row: 2 projects -->
          <ProjectCard
            v-for="project in secondRowProjects"
            :key="project.name"
            :project="project"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue'
  
  export default {
    name: 'ProjectsComponent',
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [
          {
            name: "Personal Portfolio Website",
            image: "unnamed.jpg",
            skills: ["Vue.js", "TailwindCSS"]
          },
          {
            name: "VOIX",
            image: "unnamed.jpg",
            skills: ["HTML5", "CSS3", "Javascript", "Nodejs", "MongoDB"]
          },
          {
            name: "COMMUTE",
            image: "unnamed.jpg",
            skills: ["Angular", "Spring framework", "Microservice", "SQL", "RESTful APIs"]
          },
          {
            name: "DIGITAL DIARY",
            image: "unnamed.jpg",
            skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"]
          },
          {
            name: "READ",
            image: "unnamed.jpg",
            skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"]
          }
        ]
      }
    },
    computed: {
      firstRowProjects() {
        return this.projects.slice(0, 3)
      },
      secondRowProjects() {
        return this.projects.slice(3)
      }
    }
  }
  </script>
  