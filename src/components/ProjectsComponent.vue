<template>
  <div class="bg-[#1F2226] text-white py-4 min-h-screen flex flex-col justify-center">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="projects-label">
        <span>PROJECTS</span>
      </div>
      <div class="projects-carousel-container">
        <div class="projects-carousel" ref="carousel">
          <ProjectCard
            v-for="project in duplicatedProjects"
            :key="project.id"
            :project="project"
            class="project-card"
          />
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
        {
          name: "READ",
          image: "READ.webp",
          skills: ["Angular", "Nodejs", "Expressjs", "MongoDB", "RESTful APIs"],
          explanation: `Library management system that offers a smooth user interface and leverages AJAX for instant content updates. Also features an advanced system for managing books and integrates secure authentication to protect access. Uses Angular for immediate availability updates and is designed for scalability, ensuring easy feature expansion and maintenance.`,
          githubLink: "https://github.com/Meera27/LibraryApp-Angular"
        }
      ],
      animationId: null
    }
  },
  computed: {
    duplicatedProjects() {
      return [...this.projects, ...this.projects].map((project, index) => ({
        ...project,
        id: `${project.name}-${index}`
      }))
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeUnmount() {
    this.stopCarousel()
  },
  methods: {
    startCarousel() {
      const carousel = this.$refs.carousel
      let position = 0

      const animate = () => {
        position -= 1.25 // Slower speed
        if (position <= -carousel.offsetWidth / 2) {
          position = 0
        }
        carousel.style.transform = `translateX(${position}px)`
        this.animationId = requestAnimationFrame(animate)
      }

      this.animationId = requestAnimationFrame(animate)
    },
    stopCarousel() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

.container {
  position: relative;
  overflow: hidden;
}

.projects-label {
  font-family: "Fira Sans", sans-serif;
  font-weight: 100;
  font-size: 2.5rem;
  color: #00FFFF;
  text-align: center;
  margin-bottom: 2rem;
}

.projects-carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.projects-carousel-container::before,
.projects-carousel-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.projects-carousel-container::before {
  left: 0;
  background: linear-gradient(to right, #1F2226 0%, rgba(31, 34, 38, 0) 100%);
}

.projects-carousel-container::after {
  right: 0;
  background: linear-gradient(to left, #1F2226 0%, rgba(31, 34, 38, 0) 100%);
}

.projects-carousel {
  display: flex;
  gap: 1rem;
  width: max-content;
}

.project-card {
  flex: 0 0 auto;
  width: 350px;
  height: 350px;
}

@media (max-width: 639px) {
  .projects-label {
    font-size: 2rem;
  }
}
</style>
