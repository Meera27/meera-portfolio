<template>
  <div class="bg-[#1F2226] text-white py-4 min-h-screen flex items-center">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row relative">
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
          class="project-card"
        />
      </div>
      <div class="projects-label right flex flex-row items-center">
        <div class="line"></div>
        <span>Projects</span>
        <div class="line"></div>
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
          image: "portfolio.png",
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
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  position: relative;
}

.projects-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #00FFFF;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.projects-label.right {
  writing-mode: vertical-rl;
  transform: rotate(0deg);
}

.line {
  width: 2px;
  height: 50px;
  background-color: #00FFFF;
  margin: 0 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 0;
  width: 100%;
  padding-right: 6rem;
}

.project-card {
  aspect-ratio: 12 / 8;
  overflow: hidden;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .projects-grid > :last-child {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 50%;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    width: calc(100% - 8rem);
  }
}
</style>
