<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="flex justify-between items-center bg-[#1E2024] text-white px-4 py-2">
      <div class="logo">
        <router-link to="/" class="text-lg font-bold">Logo</router-link>
      </div>
      <ul class="nav-links flex space-x-4">
        <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-gray-300">About</router-link></li>
        <li><router-link to="/projects" class="hover:text-gray-300">Projects</router-link></li>
      </ul>
    </nav>
  </header>
</template>
