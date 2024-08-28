<template>
  <div v-blur class="min-h-screen bg-[#1F2226] text-white flex flex-col items-center justify-center px-4 py-8">
    <div class="flex flex-col md:flex-row w-full max-w-7xl">
      <!-- Left div with text content -->
      <div class="w-full md:w-3/5 flex items-center justify-center p-4 md:p-8 mb-8 md:mb-0">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span style="color: #00FFFF;">Meera</span></h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-6">Software Developer</p>
          <p class="text-lg md:text-xl italic mb-8">"In the grand scheme of things, remember to always keep your code clean and your coffee strong. Success is just a semicolon away!"</p>
          <a href="https://drive.google.com/file/d/1LNBpSIHx_h-nzijaHZTiRPJsCoU6fo4Q/view?usp=sharing" target="_blank" class="resume-link text-lg">
            <span>RESUME</span>
          </a>
        </div>
      </div>

      <!-- Right div with photo -->
      <div class="w-full md:w-2/5 flex flex-col items-center justify-center p-4 md:p-8">
        <div class="relative group">
          <div class="blue-rectangle"></div>
          <img src="@/assets/unnamed.jpg" alt="Meera" class="w-64 h-64 md:w-80 md:h-80 object-cover z-10 relative">
        </div>
      </div>
    </div>

    <div class="w-full max-w-4xl flex flex-col items-center mt-12 md:mt-20">
      <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
        <!-- Top row with 10 icons -->
        <div class="skill-icon" data-tooltip="Angular"><i class="fab fa-angular text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Vue.js"><i class="fab fa-vuejs text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Java"><i class="fab fa-java text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Python"><i class="fab fa-python text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Node.js"><i class="fab fa-node-js text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="JavaScript"><i class="fab fa-js-square text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="SQL"><i class="fas fa-database text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="MongoDB"><i class="fas fa-leaf text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Docker"><i class="fab fa-docker text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Git"><i class="fab fa-git-alt text-2xl md:text-3xl"></i></div>
      </div>
      <div class="flex flex-wrap justify-center gap-4 md:gap-6">
        <!-- Bottom row with 7 icons -->
        <div class="skill-icon" data-tooltip="TypeScript"><i class="fab fa-typescript text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Jest"><i class="fas fa-vial text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Figma"><i class="fab fa-figma text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="CSS"><i class="fab fa-css3-alt text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Bootstrap"><i class="fab fa-bootstrap text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="jQuery"><i class="fab fa-js text-2xl md:text-3xl"></i></div>
        <div class="skill-icon" data-tooltip="Spring Boot">
          <svg class="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.59 3.41a2 2 0 0 0-2.83 0l-1.42 1.42a2 2 0 0 0 0 2.83l1.42 1.42a2 2 0 0 0 2.83 0l1.42-1.42a2 2 0 0 0 0-2.83l-1.42-1.42zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
body {
  background-color: #1F2226;
}

.blue-rectangle {
  position: absolute;
  top: -20px;
  right: -20px;
  bottom: -20px;
  border-top: 2px solid #00FFFF;
  border-right: 2px solid #00FFFF;
  border-bottom: 2px solid #00FFFF;
  width: 90%;
  z-index: 0;
}

.skill-icon {
  position: relative;
  cursor: pointer;
}

.skill-icon::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.skill-icon:hover::after {
  opacity: 1;
  visibility: visible;
}


.resume-link {
  text-decoration: none;
  color: white;
  position: relative;
  padding: 2px 4px;
}

.resume-link::before,
.resume-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #39FF14;
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

/* Remove this block to keep the text color white */
/* .resume-link:hover,
.resume-link:focus {
  color: #39FF14;
} */

</style>
