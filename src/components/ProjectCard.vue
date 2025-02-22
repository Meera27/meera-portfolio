<template>
  <div class="project-card">
    <img :src="projectImage" :alt="project.name" class="w-full h-full object-cover">
    <div class="overlay">
      <h3 class="project-title">{{ project.name }}</h3>
      <div class="skills">
        <span v-for="skill in project.skills" :key="skill" class="skill">
          {{ skill }}
        </span>
      </div>
      <p class="explanation">{{ truncatedExplanation }}</p>
      <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="github-button">
        GitHub
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
    },
    truncatedExplanation() {
      return this.project.explanation.length > 150
        ? this.project.explanation.slice(0, 150) + '...'
        : this.project.explanation;
    }
  }
}
</script>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  background-color: #262A2E;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 550px;
  max-width: 450px;
  margin: 0 auto; 
}

/* Ensure image fills the taller space */
.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Adjust overlay to match new height */
.overlay {
  position: absolute;
  inset: 0;
  width: 100%; /* Reduce from 100% to 80% */
  height: 100%;
  margin: 0 auto; /* Center the overlay */
  background-color: rgba(38, 42, 46, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
}

.project-card:hover .overlay {
  opacity: 1;
}

.project-title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill {
  background-color: #444;
  color: #00FFFF;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.explanation {
  color: white;
  text-align: center;
  margin-bottom: 1rem;
}

.github-button {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid #00FFFF;
  transition: color 0.3s, border-color 0.3s;
}

.github-button:hover {
  color: #00FFFF;
  border-color: #00FFFF;
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

@media (max-width: 1024px) {
  .project-card {
    height: 400px;
  }

  .project-title {
    font-size: 1.25rem;
  }

  .explanation {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  .skills {
    gap: 0.25rem;
  }

  .skill {
    padding: 0.15rem 0.35rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 1024px) {
  .project-card {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .project-card {
    height: 400px;
  }
}
</style>