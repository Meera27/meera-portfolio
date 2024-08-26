<template>
  <div class="bg-[#1F2226] text-white py-16">
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
          skills: ["Vue.js", "TailwindCSS"],
          explanation: `My Personal Portfolio website, built with Vue.js and Tailwind CSS, serves as a dynamic showcase of my professional journey. It brings together my skills, experiences, and projects, offering an interactive and visually appealing overview of my capabilities and achievements.`,
          githubLink: ""
        },
        {
          name: "VOIX",
          image: "VOIX.webp",
          skills: ["HTML5", "CSS3", "Javascript", "Nodejs", "MongoDB"],
          explanation: `VOIX is a voice-based email application designed to empower visually impaired users, offering advanced voice command functionality, comprehensive accessibility features, seamless cross-platform compatibility, and robust security protocols for a safe, private, and intuitive email experience.`,
          githubLink: "https://github.com/Meera27/Voix"
        },
        {
          name: "COMMUTE",
          image: "COMMUTE.webp",
          skills: ["Angular", "Spring framework", "Microservice", "SQL", "RESTful APIs"],
          explanation: `A comprehensive trip reservation system that enhances user experience through AJAX-based asynchronous data updates, ensures scalability and flexibility through a microservices architecture. Prioritizes user data security with robust authentication and encryption protocols, all while being designed for future growth and seamless feature integration.`,
          githubLink: ""
        },
        {
          name: "DIGITAL DIARY",
          image: "DIGITAL_DIARY.webp",
          skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"],
          explanation: `This blog application combines a user-friendly interface, robust content moderation, and community engagement features. Its integration of RESTful APIs ensures smooth operations and scalability, promising an all-rounded and engaging blogging experience.`,
          githubLink: "https://github.com/Meera27/Digital-Diary"
        },
        {
          name: "READ",
          image: "READ.webp",
          skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"],
          explanation: `Library management system that offers a smooth user interface and leverages AJAX for instant content updates. Also features an advanced system for managing books and integrates secure authentication to protect access. Uses Angular for immediate availability updates and is designed for scalability, ensuring easy feature expansion and maintenance.`,
          githubLink: "https://github.com/Meera27/LibraryApp-Angular"
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
