<template>
  <div v-blur class="min-h-screen bg-[#1F2226] text-white flex flex-col items-center justify-center px-4 py-8 md:py-16">
    <div class="flex flex-col md:flex-row w-full max-w-7xl">
      <!-- Left div with text content -->
      <div class="w-full md:w-10/9 flex items-center justify-center p-4 md:p-8 mb-8 md:mb-0">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-8xl font-bold mb-4">about<span style="color: #00FFFF;">.</span></h1>
          <p class="sm:text-2xl text-gray-300 mb-3">I'm <span style="color: #00FFFF;">Meera</span>, a Software Developer</p>
          <p class="figtree-extra-light">
            Join me as I attempt to change the world one semicolon at a time. Who knows? I might just create an app that finally explains to my mom what I actually do! 🚀
          </p>

          <div class="mt-4">
            <a href="https://drive.google.com/file/d/1mbevXwf1uMfbv-Uk_8zPBr9i9vD6F-xN/view?usp=drive_link" target="_blank" class="resume-link text-2xl">
          <span>RESUME</span>
          </a>
          </div>
        </div>
      </div>

      <!-- Right div with photo -->
      <div class="w-full md:w-2/5 flex flex-col items-center justify-center p-4 md:p-8">
        <div class="image-container">
          <div class="blue-line"></div>
          <img src="@/assets/unnamed.jpg" alt="Meera" class="w-80 md:w-90 md:h-80 object-cover z-10 relative">
        </div>
      </div>
    </div>
  </div>
  <SkillsComponent/>
</template>

<script>
import SkillsComponent from './SkillsComponent.vue';

export default {
  name: 'HomeComponent',
  components:{
    SkillsComponent
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');


.figtree-extra-light {
  font-family: "Figtree", serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
  font-size : x-large;
}

.image-container {
  position: relative;
  display: inline-block;
}

.blue-line {
  position: absolute;
  top: -25px;
  right: -25px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  border-top: 2px solid #00FFFF;
  border-right: 2px solid #00FFFF;
  z-index: 0;
}

@keyframes neon {
  from {
    box-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF;
  }
  to {
    box-shadow: 0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF, 0 0 50px #00FFFF, 0 0 60px #00FFFF;
  }
}

.resume-link {
  text-decoration: none;
  color: white;
  position: relative;
  /* padding: 2px 4px; */
}
.resume-link::before,
.resume-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #00FFFF;
  transition: width 0.3s ease-in-out;
}

.resume-link::before {
  left: 50%;
  transform: translateX(-50%);
}

.resume-link::after {
  right: 50%;
  transform: translateX(50%);
}

.resume-link:hover::before,
.resume-link:hover::after,
.resume-link:focus::before,
.resume-link:focus::after {
  width: 50%;
}

@media (max-width: 768px) {
  .skill-icon {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 687px) {
  .skill-icon {
    width: 28px;
    height: 28px;
  }
}
</style>