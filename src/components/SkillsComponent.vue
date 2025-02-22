<template>
  <div class="skills-wrapper relative">

    <div class="skills-container flex flex-wrap justify-center gap-8 mt-8 p-8 relative z-10">
      <div class="w-full text-center md:text-left mb-12 skill-title">
        <h1 class="figtree-extra-light text-4xl md:text-8xl font-bold mb-4 text-center">
          skills<span class="text-[#00FFFF]">.</span>
        </h1>
      </div>
      <div v-for="(category, categoryName) in skillCategories" :key="categoryName" class="w-full category-section">
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="(skill, index) in category" :key="index" class="skill-item"
            :style="{ animationDelay: `${index * 0.2}s` }">
            <button
              class="skill-button relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-[#1F2226] rounded-md focus:outline-none hover:text-white border-2 border-[#00FFFF] overflow-hidden">
              <div class="wave-fill"></div>
              <div class="relative z-10">
                <font-awesome-icon :icon="skill.icon" class="text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faJava, faPython, faJs, faNode, faAngular, faVuejs, faReact, faHtml5, faBootstrap, faCss3, faDocker, faGit, faJira, faFigma, faBitbucket } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer, faCode, faGears, faWind } from '@fortawesome/free-solid-svg-icons'

library.add(faJava, faPython, faJs, faNode, faAngular, faVuejs,
  faReact, faHtml5, faBootstrap, faCss3, faDocker,
  faGit, faJira, faFigma, faDatabase, faServer,
  faCode, faGears, faBitbucket, faWind
)

export default {
  name: 'SkillsComponent',
  components: {
    FontAwesomeIcon
  },
  setup() {
    const skillCategories = ref({
      'Programming Languages': [
        { name: 'Java', icon: ['fab', 'java'] },
        { name: 'Python', icon: ['fab', 'python'] },
      ],
      'Databases': [
        { name: 'MySQL', icon: ['fas', 'database'] },
        { name: 'MongoDB', icon: ['fas', 'database'] },
        { name: 'PostgreSQL', icon: ['fas', 'database'] }
      ],
      'Frontend Technologies': [
        { name: 'Angular', icon: ['fab', 'angular'] },
        { name: 'Vue.js', icon: ['fab', 'vuejs'] },
        { name: 'React.js', icon: ['fab', 'react'] },
        { name: 'TailwindCSS', icon: ['fas', 'wind'] }
      ],
      'Backend & Frameworks': [
        { name: 'Spring Framework', icon: ['fas', 'gears'] },
        { name: 'Node.js', icon: ['fab', 'node'] },
        { name: 'Express.js', icon: ['fas', 'server'] },
        { name: 'Ruby on Rails', icon: ['fas', 'server'] },
      ],
      'Tools & Technologies': [
        { name: 'Docker', icon: ['fab', 'docker'] },
        { name: 'Git', icon: ['fab', 'git'] },
        { name: 'CI/CD Pipelines', icon: ['fas', 'gears'] },
      ]
    })

    onMounted(() => {
      const observerOptions = {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }
        })
      }, observerOptions)

      // Observe both categories and skills
      const wrapper = document.querySelector('.skills-wrapper')
      if (wrapper) observer.observe(wrapper)

      document.querySelectorAll('.skill-title,.category-section, .skill-item, .category-title').forEach((item) => {
        observer.observe(item)
      })
    })

    return {
      skillCategories
    }
  }
}
</script>

<style scoped>
.skills-container {
  width: 100%;
  padding: 2rem;
}
.skill-title {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-title.show {
  opacity: 1;
  transform: translateY(0);
}

.category-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.category-title {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-out;
}

.skill-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-button {
  width: 250px;
  height: 80px;
  white-space: normal;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
}

.category-section.show,
.category-title.show,
.skill-item.show {
  opacity: 1;
  transform: translateY(0);
}
.skill-title:not(.show) {
  opacity: 0;
  transform: translateY(-50px);
}


.skill-item:nth-child(1) {
  transition-delay: 0.1s;
}

.skill-item:nth-child(2) {
  transition-delay: 0.15s;
}

.skill-item:nth-child(3) {
  transition-delay: 0.2s;
}

.skill-item:nth-child(4) {
  transition-delay: 0.25s;
}

.skill-item:nth-child(5) {
  transition-delay: 0.3s;
}

.skill-button:hover {
  transform: scale(1.05);
  border-width: 3px;
}

/* Fade out animations */
.category-section:not(.show) {
  opacity: 0;
  transform: translateY(-30px);
}

.category-title:not(.show) {
  opacity: 0;
  transform: translateY(-20px);
}

.skill-item:not(.show) {
  opacity: 0;
  transform: translateY(-50px);
}

@media (max-width: 768px) {
  .skill-button {
    width: 200px;
    height: 90px;
    font-size: 1rem;
  }

  .skills-container {
    gap: 1.5rem;
  }
}
</style>