<template>
  <div class="projects-section">
    <div class="projects-container">
      <div class="w-full text-center md:text-left mb-12 project-title" ref="projectsTitle">
        <h1 class="figtree-extra-light text-4xl md:text-7xl font-bold mb-4 text-center" style="color: white;">
          <span class="letter" v-for="(letter, index) in 'projects'.split('')" :key="index" :style="{ 'animation-delay': `${index * 0.1}s` }">
            {{ letter }}
          </span>
          <span class="letter text-[#00FFFF] dot-animation">.</span>
        </h1>
      </div>
      <div class="grid-container">
        <div v-for="(project, index) in projects" :key="index" :class="getGridClass(index)">
          <ProjectCard :project="project" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'ProjectsComponent',
  components: {
    ProjectCard
  },
  setup() {
    const projectsTitle = ref(null)
    
    onMounted(() => {
      const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            
            setTimeout(() => {
              const dotElement = document.querySelector('.projects-section .dot-animation')
              if (dotElement) {
                dotElement.classList.add('animate-dot')
              }
            }, 1200) 
            
            titleObserver.unobserve(entry.target)
          }
        })
      }, { 
        threshold: 0.2,
        rootMargin: '-50px 0px' 
      })
      
      if (projectsTitle.value) {
        titleObserver.observe(projectsTitle.value)
      }
    })
    
    return {
      projectsTitle,
      projects: [
        {
          name: "eyeT",
          image: "eyes.avif",
          githubLink: "https://github.com/Meera27/eyeT"
        },
        {
          name: "VOIX",
          image: "wave.jpg",
          githubLink: "https://github.com/Meera27/Voix"
        },
        {
          name: "COMMUTE",
          image: "commute.avif",
          githubLink: "https://github.com/Meera27/Commute"
        },
        {
          name: "DIGITAL DIARY",
          image: "diary.jpg",
          githubLink: "https://github.com/Meera27/Digital-Diary"
        }
      ]
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
  width: 100%;
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

.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeLetterIn 0.6s forwards ease-out;
  animation-play-state: paused;
}

.project-title.show .letter {
  animation-play-state: running;
}

@keyframes fadeLetterIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.dot-animation {
  position: relative;
  display: inline-block;
  opacity: 0;
}

.dot-animation.animate-dot {
  animation: pulseDot 2s infinite;
  opacity: 1;
}

@keyframes pulseDot {
  0% {
    transform: scale(1);
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }
  50% {
    transform: scale(1.2);
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.4);
  }
  100% {
    transform: scale(1);
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }
}


.project-title {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.project-title.show {
  opacity: 1;
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
  
  @keyframes fadeLetterIn {
    0% {
      opacity: 0;
      transform: translateY(20px); 
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>