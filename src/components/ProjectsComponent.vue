<template>
  <div class="projects-section">
    <div class="projects-container">
      <div class="w-full text-center md:text-left mb-12 project-title">
        <h1 class="figtree-extra-light text-4xl md:text-8xl font-bold mb-4 text-center" style="color: white;">
          projects<span class="text-[#00FFFF]">.</span>
        </h1>
      </div>
      <div class="grid-container">
        <div v-for="(project, index) in projects" :key="index" :class="getGridClass(index)">
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
          name: "eyeT",
          image: "eyes.avif",
          skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"],
          explanation: `Library management system that offers a smooth user interface and leverages AJAX for instant content updates. Also features an advanced system for managing books and integrates secure authentication to protect access. Uses Angular for immediate availability updates and is designed for scalability, ensuring easy feature expansion and maintenance.`,
          githubLink: "https://github.com/Meera27/LibraryApp-Angular"
        },
        {
          name: "VOIX",
          image: "wave.jpg",
          skills: ["HTML5", "CSS3", "Javascript", "Nodejs", "MongoDB"],
          explanation: `VOIX is a voice-based email application designed to empower visually impaired users, offering advanced voice command functionality, comprehensive accessibility features, seamless cross-platform compatibility, and robust security protocols for a safe, private, and intuitive email experience.`,
          githubLink: "https://github.com/Meera27/Voix"
        },
        {
          name: "COMMUTE",
          image: "commute.avif",
          skills: ["Angular", "Spring framework", "Microservice", "SQL", "RESTful APIs"],
          explanation: `A comprehensive trip reservation system that enhances user experience through AJAX-based asynchronous data updates, ensures scalability and flexibility through a microservices architecture. Prioritizes user data security with robust authentication and encryption protocols, all while being designed for future growth and seamless feature integration.`,
          githubLink: "https://github.com/Meera27/Commute"
        },
        {
          name: "DIGITAL DIARY",
          image: "diary.jpg",
          skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"],
          explanation: `This blog application combines a user-friendly interface, robust content moderation, and community engagement features. Its integration of RESTful APIs ensures smooth operations and scalability, promising an all-rounded and engaging blogging experience.`,
          githubLink: "https://github.com/Meera27/Digital-Diary"
        },
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
  min-height: 100vh;
  width: 100;
  padding: 4rem 0;
  position: relative; 
}

.projects-container {
  position: relative;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  padding: 2rem;
}

.projects-heading {
  position: absolute;
  color: #00FFFF;
  font-size: 2.5rem;
  font-weight: 100;
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.1em;
  left: 30rem; 
  top: 2rem;
  margin-bottom: 4rem; 
  z-index: 10;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9rem;
  max-width: 1700px;
  margin: 0 auto;
  margin-top: 1.0rem;
  padding: 0 1rem;
}

.left {
  grid-column: 1 / 2;
  margin-top: 12rem; 
}

.right {
  grid-column: 2 / 3;
}

@media (max-width: 1024px) {
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

@media (max-width: 768px) {
  .grid-container {
    gap: 1rem;
    padding: 0 1rem;
  }

  .left, .right {
    margin-top: 1rem;
  }
}

</style>