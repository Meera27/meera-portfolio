<template>
  <div class="education-section">
    <div class="education-container">
      <!-- Left Section (65%) -->
      <div class="left-section">
          <div v-for="(education, index) in educations" :key="index" class="timeline-item"
            :class="{ 'show': isVisible }">
            <div class="timeline-content">
              <span class="year text-[#00FFFF]">{{ education.year }}</span>
              <h3 class="institution text-xl font-bold mt-2 text-white">{{ education.institution }}</h3>
              <h4 class="degree text-gray-300">{{ education.degree }}</h4>
              <div class="role-underline"></div>
              <p class="description text-gray-400 mt-2">{{ education.description }}</p>
            </div>
          </div>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div v-for="(education, index) in educations" :key="'dot-'+index" class="timeline-dot"></div>
      </div>

      <!-- Right Section (35%) -->
      <div class="right-section">
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
    const educations = ref([
      {
        year: '2023 - 2025',
        institution: 'Langara College',
        degree: 'Post Degree Diploma in Web and Mobile App Design and Development',
        description: 'Currently pursuing advanced studies in modern web technologies and mobile application development.'
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

      document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item))
    })

    return {
      educations,
      isVisible
    }
  }
}
</script>

<style scoped>
.education-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
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
  animation: fadeIn 0.8s ease-out forwards;
}

.vertical-title {
  transform: rotate(-90deg) translate(-50%, 0);
  transform-origin: left;
  position: fixed;
  left: 100px;
  top: 50%;
}

.timeline-container {
  width: 2px;
  position: relative;
  margin: 0 1rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 6px;
  width: 1px;
  height: 87%;
  background-color: #00FFFF;
  opacity: 0.7;
}


.timeline-item.show {
  opacity: 1;
  transform: translateX(0);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #00FFFF;
  border: 1px solid #1F2226;
  box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.3);
}

.timeline-content {
  padding: 0 0 1.5rem 1.5rem; 
  border-radius: 8px;
}
.year {
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
}

.role-underline {
  width: 50px;
  height: 1px;
  background-color: #00FFFF;
  margin: 1rem 0;
  opacity: 0.7;
}

.nav-circle {
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border: 1px solid #00FFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(31, 34, 38, 0.8);
  z-index: 10;
}

.nav-circle:hover {
  transform: translateY(-50%) scale(1.1);
  background: rgba(0, 255, 255, 0.1);
}

.arrow-left {
  width: 1rem;
  height: 1px;
  background: #00FFFF;
  position: relative;
  margin-right: -0.25rem;
}

.arrow-left::after {
  content: '';
  position: absolute;
  left: 0;
  top: -2px;
  width: 8px;
  height: 1px;
  background: #00FFFF;
  transform: rotate(-45deg);
  transform-origin: left;
}

.arrow-left::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 8px;
  height: 1px;
  background: #00FFFF;
  transform: rotate(45deg);
  transform-origin: left;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
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
  .education-title {
  text-align: right; 
}

.vertical-title {
  transform: rotate(-90deg) translate(-50%, 0);
  transform-origin: right;
  position: fixed;
  right: 100px; 
  top: 50%;
}

  .timeline-container {
    padding-left: 3rem;
  }
}

@media (max-width: 768px) {
  .nav-circle {
    bottom: 2rem;
    top: auto;
    transform: none;
  }

  .nav-circle:hover {
    transform: scale(1.1);
  }
}

@media (max-width: 480px) {
  .nav-circle {
    left: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .arrow-left {
    width: 0.8rem;
  }
}

.timeline-dot:nth-child(2) { top: 6px; }
.timeline-dot:nth-child(3) { top: 50%; }

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease-out;
  text-align: right; /* Add right alignment */
  padding-right: 2rem; /* Add padding on the right */
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

  .education-title {
    position: static;
    transform: none;
    text-align: right;
    margin-bottom: 2rem;
  }

  .timeline-container {
    width: 2px;
    position: absolute;
    left: 2rem; 
    top: 0;
    height: 100%;
    margin: 0;
  }

  .timeline-line {
    height: calc(100% - 2rem);
  }

  .timeline-dot {
    left: 2rem;
  }
  .timeline-item {
    transform: translateX(0);
    padding-left: 4rem;
    padding-right: 0; 
    text-align: left;
    margin-bottom: 3rem;
  }

  .timeline-content {
    padding: 0 1.5rem 1.5rem 0;
  }
}

@media (max-width: 768px) {
  .timeline-container {
    left: 1rem;
  }

  .timeline-item {
    padding-left: 3rem;
  }
}
</style>