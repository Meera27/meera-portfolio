<template>
  <div class="project-card">
    <div class="image-container">
      
      <img :src="projectImage" :alt="project.name" class="project-image">
    </div>
    <div class="project-info">
      <div class="project-details">
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-type">— {{ getProjectType(project.name) }}</p>
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
        return require(`@/assets/${this.project.image}`);
      } catch (e) {
        console.error(`Image not found: ${this.project.image}`, e);
        return ''; 
      }
    }
  },
  methods: {
    getProjectType(name) {
      const types = {
        'eyeT': 'Library Management System',
        'VOIX': 'Voice Email Application',
        'COMMUTE': 'Trip Reservation System',
        'DIGITAL DIARY': 'Blog Application'
      };
      return types[name] || 'Project';
    }
  }
}
</script>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 1700px;
  margin: 0 auto; 
}

.image-container {
  overflow: hidden;
  height: 580px;
  border-radius: 4px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease, transform 0.5s ease;
}

.project-card:hover .project-image {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.project-info {
  position: relative;
  width: 100%;
  padding: 1.5rem 1rem 0;
  background: transparent;
}

.project-line {
  width: 100%;
  height: 1px;
  background-color: #00FFFF;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.project-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top :-2%;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.project-type {
  font-size: 1rem;
  color: white;
  margin: 0;
}

@media (max-width: 1024px) {
  .image-container {
    height: 350px;
  }
  
  .project-name {
    font-size: 1.25rem;
  }
  
  .project-type {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .image-container {
    height: 250px;
  }
  
  .project-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .project-name {
    font-size: 1.2rem;
  }
  
  .project-type {
    font-size: 0.8rem;
  }
}
</style>