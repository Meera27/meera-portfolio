<template>
  <div class="projects-section">
  <div class="projects-container">
    <h2 class="projects-heading">PROJECTS</h2>
    <div class="grid-container">
      <div v-for="(project, index) in projects" :key="project.id" :class="getGridClass(index)">
        <ProjectCard :project="project" />
      </div>
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
          image: "portfolio.jpg",
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
        // {
        //   name: "READ",
        //   image: "READ.webp",
        //   skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"],
        //   explanation: `Library management system that offers a smooth user interface and leverages AJAX for instant content updates. Also features an advanced system for managing books and integrates secure authentication to protect access. Uses Angular for immediate availability updates and is designed for scalability, ensuring easy feature expansion and maintenance.`,
        //   githubLink: "https://github.com/Meera27/LibraryApp-Angular"
        // }
      ],
    }
  },
  methods: {
    getGridClass(index) {
      return index % 2 === 0 ? 'left' : 'right';
    }
  }
}
</script>

<style scoped>
.projects-section {
  background-color: #1E2024;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 0;
}

.projects-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1090px;
}

.projects-heading {
  position: absolute;
  left: 4rem;
  top: 0;
  color: #00FFFF;
  font-size: 1.8rem;
  font-weight: 100;
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.1em;
}

.left {
  grid-column: 1 / 2;
  margin-top: 25rem; 
}

.right {
  grid-column: 2 / 3;
}

@media (max-width: 1024px) { /* Laptop/medium screen breakpoint */
  .grid-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 700px;
    padding: 0 2rem;
  }

  .left, .right {
    grid-column: 1;
    margin-top: 2rem;
  }

  .left:first-child {
    margin-top: 0;
  }
}

@media (max-width: 768px) { /* Mobile breakpoint */
  .grid-container {
    gap: 1rem;
    padding: 0 1rem;
  }

  .left, .right {
    margin-top: 1rem;
  }
}

</style>