<template>
    <div class="fixed left-4 bottom-0 flex flex-col items-center z-50">
      <div class="flex flex-col items-center mb-4">
        <a href="https://github.com/Meera27" class="mb-4 text-white hover:text-gray-300"><i class="fab fa-github text-2xl"></i></a>
        <a href="https://www.linkedin.com/in/meeramnair99/" class="mb-4 text-white hover:text-gray-300"><i class="fab fa-linkedin text-2xl"></i></a>
        <a href="https://www.facebook.com/meera.nair.71/" class="mb-4 text-white hover:text-gray-300"><i class="fab fa-facebook text-2xl"></i></a>
        <a href="https://www.instagram.com/meeramnair._/" class="mb-4 text-white hover:text-gray-300"><i class="fab fa-instagram text-2xl"></i></a>
      </div>
      <div class="w-px h-24 bg-white"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialIcons'
  }
  </script>
  
  <style scoped>
  .fab {
    transition: transform 0.3s ease;
  }
  
  a:hover .fab {
    transform: translateY(-3px);
  }
  </style>
  