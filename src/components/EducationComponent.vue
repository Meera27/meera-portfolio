<template>
  <div class="education-section" ref="educationSection">
    <div class="education-container">
      <div class="left-section">
        <div class="timeline-container">
          <div class="timeline-line" :class="{ 'animate': isVisible }"></div>
          <div v-for="(education, index) in educations" :key="index" class="timeline-item"
            :class="{ 'show': isVisible }" :style="{ '--i': index + 1 }">
            <div class="timeline-dot" :class="{ 'animate': isVisible }"></div>
            <div class="timeline-content">
              <span class="year text-[#00FFFF]">{{ education.year }}</span>
              <h3 class="institution text-xl font-bold mt-2 text-white">{{ education.institution }}</h3>
              <h4 class="degree text-gray-300">{{ education.degree }}</h4>
              <div class="role-underline" :class="{ 'animate': isVisible }"></div>
              <p class="description text-gray-400 mt-2">{{ education.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="right-section" :class="{ 'animate': isVisible }">
        <h1 class="education-title figtree-extra-light text-4xl md:text-8xl font-bold text-white">
          education<span class="text-[#00FFFF]">.</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'EducationComponent',
  setup() {
    const isVisible = ref(false)
    const educationSection = ref(null)
    const educations = ref([
      {
        year: '2023 - 2025',
        institution: 'Concordia University',
        degree: 'M.Eng Software Engineering',
        description: 'Currently pursuing Software Engineering studies in modern web technologies and mobile application development.'
      },
      {
        year: '2018 - 2022',
        institution: 'APJ Abdul Kalam Technological University',
        degree: 'Bachelor of Technology in Computer Science',
        description: 'Completed undergraduate studies with focus on computer science fundamentals and software engineering.'
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

      if (educationSection.value) {
        observer.observe(educationSection.value)
      }
    })

    return {
      educations,
      isVisible,
      educationSection
    }
  }
}
</script>

<style scoped>
.education-section {
  min-height: 100vh;
  width: 100%;
  background-color: #1F2226;
  padding: 4rem 0;
  margin-top: -14em;
  position: relative;
}

.education-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  /* gap: 3rem; */
  padding: 0 2rem;
  position: relative;
}

.left-section {
  width: 65%;
  position: relative;
}

.right-section {
  width: 35%;
  padding-left: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.right-section.animate {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.6s;
}

.timeline-container {
  position: relative;
  padding-right: 1rem;
  height: 100%;
}

.timeline-line {
  position: absolute;
  right: 16px;
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
  transform: translateX(-30px);
  transition: all 0.6s ease-out;
  padding-right: 3rem;
  text-align: right;
}

.timeline-item.show {
  opacity: 1;
  transform: translateX(0);
  transition-delay: calc(0.2s * var(--i, 1));
}

.timeline-dot {
  position: absolute;
  right: -3.5px;
  /* top: 6px; Re-enabled this */
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

.timeline-content {
  padding: 0 0 1.5rem 1.5rem;
  border-radius: 8px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.year {
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
}

.role-underline {
  width: 37em;
  height: 1px;
  background-color: #00FFFF;
  margin: 1rem 0;
  opacity: 0.7;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.6s ease-out;
}

.role-underline.animate {
  transform: scaleX(1);
  transition-delay: calc(0.8s + (0.2s * var(--i, 1)));
}

.education-title {
  text-align: right;
  white-space: nowrap;
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

@keyframes scaleLeft {
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
  .education-container {
    flex-direction: column-reverse;
  }

  .left-section,
  .right-section {
    width: 100%;
    padding: 0;
  }

  .right-section {
    margin-bottom: 3rem;
  }

  .timeline-container {
    padding-right: 3rem;
  }

  .timeline-line {
    right: 48px;
    height: calc(100% - 1.5rem);
  }

  .timeline-dot {
    right: -3.5px;
  }

  .timeline-item {
    padding-right: 4rem;
    margin-bottom: 3rem;
  }

  .role-underline {
    width: 100%;
    max-width: 37em;
  }
}

@media (max-width: 768px) {
  .education-section {
    padding: 2rem 0;
  }

  .timeline-container {
    padding-right: 2rem;
  }

  .timeline-item {
    padding-right: 3rem;
  }

  .role-underline {
    max-width: 100%;
    width: calc(100% - 4rem);
  }

  .education-title {
    font-size: 2.5rem;
  }
}
</style>