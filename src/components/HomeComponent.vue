<template>
  <div class="min-h-screen bg-[#1F2226] text-white flex flex-col items-center justify-center px-4 py-8">
    <div class="flex flex-col md:flex-row w-full max-w-6xl">
      <!-- Left div with text content -->
      <div class="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 mb-8 md:mb-0">
        <div class="text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-2">Hi, I'm <span style="color: #00FFFF;">Meera</span></h1>
          <p class="text-lg md:text-xl text-gray-400 mb-4">Software Developer</p>
          <p class="text-base md:text-lg italic mb-6">"In the grand scheme of things, remember to always keep your code clean and your coffee strong. Success is just a semicolon away!"</p>
          <a href="https://drive.google.com/file/d/1LNBpSIHx_h-nzijaHZTiRPJsCoU6fo4Q/view?usp=sharing" target = "_blank" class="resume-link text-lg">Resume</a>
        </div>
      </div>

      <!-- Right div with photo -->
      <div class="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-8">
        <div class="relative group">
          <img src="@/assets/unnamed.jpg" alt="Meera" class="w-48 h-48 md:w-64 md:h-64 object-cover z-10 relative transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div class="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 border-t-4 border-r-4 border-b-4 border-neon-blue opacity-75 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"></div>
        </div>
      </div>
    </div>

    <div class="w-full max-w-4xl flex flex-col items-center mt-8 md:mt-16">
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

@keyframes neon-glow {
  0%, 100% {
    box-shadow: 2px 0 5px #00FFFF, 2px 0 10px #00FFFF, 2px 0 15px #00FFFF, 2px 0 20px #00FFFF;
  }
}

.border-neon-blue {
  border-color: #00FFFF;
  animation: neon-glow 1.5s ease-in-out infinite;
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
}

.resume-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #39FF14;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.resume-link:hover::after {
  transform: scaleX(1);
}
</style>
