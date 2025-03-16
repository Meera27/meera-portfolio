<template>
  <div class="projects-section">
    <div class="projects-container">
      <div class="w-full text-center md:text-left mb-12 project-title">
        <h1 class="figtree-extra-light text-4xl md:text-7xl font-bold mb-4 text-center animate-title" style="color: white;" ref="projectsTitle">
          projects<span class="text-[#00FFFF]">.</span>
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
      setTimeout(() => {
        if (projectsTitle.value) {
          projectsTitle.value.classList.add('show')
        }
      }, 300)
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

.animate-title {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-title.show {
  opacity: 1;
  transform: translateY(0);
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