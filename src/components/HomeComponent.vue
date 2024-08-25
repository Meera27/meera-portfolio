<template>
  <div class="min-h-screen bg-[#1F2226] text-white flex items-center">
    <div class="flex flex-col md:flex-row w-full -mt-16">
      <!-- Left div with text content -->
      <div class="md:w-1/2 flex items-center justify-center p-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-2">Hi, I'm <span style="color: #00FFFF;">Meera</span> </h1>
          <p class="text-xl text-gray-400 mb-4">Software Developer</p>
          <p class="text-lg italic">"Your favorite quote here"</p>
        </div>
      </div>

      <!-- Right div with photo and skills icons -->
      <div class="md:w-1/2 flex flex-col items-center justify-center p-8">
        <div class="relative group">
          <img src="@/assets/unnamed.jpg" alt="Meera" class="w-64 h-64 object-cover z-10 relative transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div class="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-b-4 border-neon-blue opacity-75 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"></div>
        </div>
        <div class="flex space-x-4 mt-4">
          <!-- Add your skill icons here -->
          <i class="fab fa-html5 text-4xl"></i>
          <i class="fab fa-css3-alt text-4xl"></i>
          <i class="fab fa-js-square text-4xl"></i>
          <i class="fab fa-vue text-4xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
