<template>
  <div class="project-card" ref="projectCard">
    <div class="image-container">
      <a :href="project.githubLink" target="_blank">
        <img :src="projectImage" :alt="project.name" class="project-image">
      </a>
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
import { computed } from 'vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const projectCard = ref(null)
    let observer = null
    let lastScrollPosition = 0
    let scrollingDown = ref(true)
    
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      scrollingDown.value = currentScrollPosition > lastScrollPosition
      lastScrollPosition = currentScrollPosition
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            entry.target.classList.remove('animate-out')
          } else {
            entry.target.classList.remove('animate')
            entry.target.classList.add('animate-out')
          }
        })
      }, { 
        threshold: 0.15,
        rootMargin: '-50px 0px' 
      })
      
      if (projectCard.value) {
        observer.observe(projectCard.value)
      }
    })
    
    onBeforeUnmount(() => {
      if (observer && projectCard.value) {
        observer.unobserve(projectCard.value)
      }
      window.removeEventListener('scroll', handleScroll)
    })
    
    const getProjectType = (name) => {
      const types = {
        'eyeT': 'Library Management System',
        'VOIX': 'Voice Email Application',
        'COMMUTE': 'Trip Reservation System',
        'DIGITAL DIARY': 'Blog Application'
      }
      return types[name] || 'Project'
    }
    
    return {
      projectCard,
      getProjectType,
      projectImage: computed(() => {
        try {
          return require(`@/assets/${props.project.image}`)
        } catch (e) {
          console.error(`Image not found: ${props.project.image}`, e)
          return ''
        }
      })
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
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  will-change: transform, opacity;
}

.project-card.animate {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(0.1s * v-bind(index));
}

.project-card.animate-out {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.left .project-card {
  transform: translateX(-50px);
}

.left .project-card.animate {
  opacity: 1;
  transform: translateX(0);
  transition-delay: calc(0.1s * v-bind(index));
}

.left .project-card.animate-out {
  opacity: 0;
  transform: translateX(-30px);
}

.right .project-card {
  transform: translateX(50px);
}

.right .project-card.animate {
  opacity: 1;
  transform: translateX(0);
  transition-delay: calc(0.1s * v-bind(index));
}

.right .project-card.animate-out {
  opacity: 0;
  transform: translateX(30px);
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

.project-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: -2%;
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