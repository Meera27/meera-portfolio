<template>
  <div class="experience-section" ref="experienceSection">
    <div class="experience-container">
      <div class="left-section" :class="{ 'animate': isVisible }">
        <div class="vertical-title">
          <h1 class="experience-title figtree-extra-light text-4xl md:text-8xl font-bold">
            experience<span class="text-[#00FFFF]">.</span>
          </h1>
        </div>
      </div>
      <div class="right-section">
        <div class="timeline-container">
          <div class="timeline-line" :class="{ 'animate': isVisible }"></div>

          <div v-for="(experience, index) in experiences" :key="index" class="timeline-item"
            :class="{ 'show': isVisible }" :style="{ '--i': index + 1 }">
            <div class="timeline-dot" :class="{ 'animate': isVisible }"></div>
            <div class="timeline-content">
              <span class="year text-[#00FFFF]">{{ experience.year }}</span>
              <h3 class="company text-xl font-bold mt-2">{{ experience.company }}</h3>
              <h4 class="role text-gray-300">{{ experience.role }}</h4>
              <div class="role-underline" :class="{ 'animate': isVisible }"></div>
              <p class="description text-gray-400 mt-2">{{ experience.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ExperienceComponent',
  setup() {
    const isVisible = ref(false)
    const experienceSection = ref(null)
    const experiences = ref([
      {
        year: '2024',
        company: 'Fresh Prep',
        role: 'Software Developer Intern',
        description: 'Working on developing and maintaining web applications using Angular and Spring Boot.'
      },
      {
        year: '2022',
        company: 'Cognizant Technology Solutions',
        role: 'CSD Intern',
        description: 'Developed full-stack applications using MEAN stack and implemented CI/CD pipelines.'
      }
    ])

    onMounted(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              isVisible.value = true
            }
          })
        },
        { threshold: 0.1 }
      )

      if (experienceSection.value) {
        observer.observe(experienceSection.value)
      }
    })

    return {
      experiences,
      isVisible,
      experienceSection
    }
  }
}
</script>

<style scoped>
.experience-section {
  min-height: 100vh;
  width: 100%;
  background-color: #1F2226;
  padding: 4rem 0;
  margin-top: 6%;
  position: relative;
}

.experience-title {
  color: white;
  white-space: nowrap;
}

.experience-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  position: relative;
}

.left-section {
  width: 35%;
  padding-right: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.left-section.animate {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.right-section {
  width: 65%;
  position: relative;
}

.timeline-container {
  position: relative;
  padding-left: 1rem;
  height: 100%;
}

.timeline-line {
  position: absolute;
  top: 6px;
  width: 1px;
  height: 87%;
  background-color: #00FFFF;
  opacity: 0.7;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 1s ease-out;
}

.timeline-line.animate {
  transform: scaleY(1);
  transition-delay: 0.5s;
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease-out;
  padding-left: 2rem;
}

.timeline-item.show {
  opacity: 1;
  transform: translateX(0);
  transition-delay: calc(0.2s * var(--i, 1));
}

.timeline-dot {
  position: absolute;
  left: -3.5px;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #00FFFF;
  border: 1px solid #1F2226;
  box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.3);
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.timeline-dot.animate {
  opacity: 1;
  transform: scale(1);
  transition-delay: calc(0.6s + (0.2s * var(--i, 1)));
}

.role-underline {
  width: 37em;
  height: 1px;
  background-color: #00FFFF;
  margin: 1rem 0;
  opacity: 0.7;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s ease-out;
}

.role-underline.animate {
  transform: scaleX(1);
  transition-delay: calc(0.8s + (0.2s * var(--i, 1)));
}

.timeline-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-radius: 8px;
}

.year {
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleUp {
  to {
    transform: scaleY(1);
  }
}

@keyframes scaleRight {
  to {
    transform: scaleX(1);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  70% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 1300px) {
  .experience-container {
    flex-direction: column;
  }

  .left-section,
  .right-section {
    width: 100%;
    padding-right: 0;
  }

  .timeline-container {
    padding-left: 3rem;
  }

  .timeline-dot {
    left: -3.5px;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }
  
  .role-underline {
    width: 100%;
    max-width: 37em;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 0;
  }
  
  .experience-title {
    font-size: 2.5rem;
  }
}
</style>