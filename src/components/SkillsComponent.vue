<template>
  <div class="skills-wrapper relative">
    <div class="skills-container flex flex-wrap justify-center gap-1 mt-3 p-6 relative z-10">
      <div class="w-full text-center md:text-left mb-8 skill-title">
        <h1 class="figtree-extra-light text-4xl md:text-7xl font-bold mb-3 text-center" style="color: white;">
          skills<span class="text-[#00FFFF]">.</span>
        </h1>
      </div>
      <div v-for="(category, categoryName) in skillCategories" :key="categoryName" class="w-full category-section mb-4">
        <div class="flex flex-wrap justify-center gap-7">
          <div v-for="(skill, index) in category" :key="index" class="skill-item"
            :style="{ animationDelay: `${index * 0.2}s` }">
            <button
              class="skill-button relative inline-flex items-center justify-center text-sm font-extralight transition-all duration-200 bg-[#1F2226] rounded-md focus:outline-none border border-[#00FFFF] overflow-hidden">
              <div class="wave-fill"></div>
              <div class="relative z-10">
                <font-awesome-icon :icon="skill.icon" class="text-xl" :style="{ color: getIconColor(skill.name) }" />
              </div>
              <span class="ml-2 text-white">{{ skill.name }}</span>
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
import { 
  faJava, 
  faPython, 
  faJs, 
  faNodeJs, 
  faAngular, 
  faVuejs, 
  faReact, 
  faHtml5, 
  faCss3Alt, 
  faDocker, 
  faGitAlt 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase, 
  faServer, 
  faGears 
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(
  faJava, faPython, faJs, faNodeJs, faAngular, 
  faVuejs, faReact, faHtml5, faCss3Alt, faDocker, 
  faGitAlt, faDatabase, faServer, faGears
)

export default {
  name: 'SkillsComponent',
  components: {
    FontAwesomeIcon
  },
  setup() {
    const getIconColor = (skillName) => {
      const colorMap = {
        'Java': '#f89820',
        'Python': '#4B8BBE',
        'MySQL': '#00758F',
        'MongoDB': '#4DB33D',
        'PostgreSQL': '#336791',
        'Angular': '#DD0031',
        'Vue.js': '#41B883',
        'React.js': '#61DAFB',
        'TailwindCSS': '#38B2AC',
        'Node.js': '#339933',
        'Express.js': '#000000',
        'Docker': '#2496ED',
        'Git': '#F05032',
        'Spring Framework': '#6DB33F'
      }
      return colorMap[skillName] || '#00FFFF'
    }

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
        { name: 'TailwindCSS', icon: ['fab', 'css3-alt'] }
      ],
      'Backend & Frameworks': [
        { name: 'Spring Framework', icon: ['fas', 'gears'] },
        { name: 'Node.js', icon: ['fab', 'node-js'] },
        { name: 'Express.js', icon: ['fas', 'server'] }
      ],
      'Tools & Technologies': [
        { name: 'Docker', icon: ['fab', 'docker'] },
        { name: 'Git', icon: ['fab', 'git-alt'] }
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

      const wrapper = document.querySelector('.skills-wrapper')
      if (wrapper) observer.observe(wrapper)

      document.querySelectorAll('.skill-title,.category-section, .skill-item, .category-title').forEach((item) => {
        observer.observe(item)
      })
    })

    return {
      skillCategories,
      getIconColor
    }
  }
}
</script>

<style scoped>
.skills-container {
  width: 100%;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  margin-bottom: 1.5rem;
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
  width: 180px;
  height: 50px;
  white-space: normal;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  font-size: 0.8rem;
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

.skill-button:hover .font-awesome-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

.wave-fill {
  opacity: 0.1;
}

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