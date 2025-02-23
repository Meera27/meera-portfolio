<template>
  <footer class="bg-[#151719] text-white py-8 w-full">
    <div class="container mx-auto px-8 max-w-7xl">
      <div class="grid md:grid-cols-3 gap-8 items-center">
        <!-- Location Section -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2 text-gray-400">
            <i class="fas fa-map-marker-alt text-cyan"></i>
            <span>Montreal, QC, Canada</span>
          </div>
          <div class="flex items-center justify-center md:justify-start gap-2 mt-2 text-gray-400">
            <i class="fas fa-globe text-cyan"></i>
            <span>45.5017° N, 73.5673° W</span>
          </div>
          <div class="flex items-center justify-center md:justify-start gap-2 mt-2 text-gray-400">
            <i class="far fa-clock text-cyan"></i>
            <span>EST (UTC-5)</span>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-3">Contact Me</h2>
          <a href="mailto:muraleedharannairmeera@gmail.com" 
             class="text-[#00FFFF] hover:opacity-80 transition-all duration-300 flex items-center justify-center gap-2">
            <i class="fas fa-envelope"></i>
            <span class="text-sm">muraleedharannairmeera@gmail.com</span>
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-center md:text-right">
          <p class="text-sm mb-1">
            Coded from the ground up by <span class="neon-blue"><b>Meera</b> 🖥️</span>
          </p>
          <p class="text-xs text-gray-400">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.neon-blue {
  color: #00FFFF;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 120px;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  footer {
    padding: 2rem 1rem;
  }
  
  a span {
    font-size: 0.875rem;
    word-break: break-all;
  }
}

.text-cyan {
  transition: all 0.3s ease;
}

.text-cyan:hover {
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}
</style>