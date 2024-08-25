<template>
    <div class="bg-[#1E2024] text-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">My Journey</h2>
        <div class="relative">
          <!-- Horizontal line with dimming effect -->
          <div class="absolute w-full h-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          
          <!-- Timeline items -->
          <div class="flex justify-between relative">
            <div v-for="(item, index) in timelineItems" :key="index" 
                 class="flex flex-col items-center" 
                 :class="{'ml-0': index === 0, 'mr-0': index === timelineItems.length - 1}">
              <!-- Time period -->
              <div class="mb-4 text-sm">{{ item.period }}</div>
              
              <!-- Glowing dot -->
              <div :class="`w-4 h-4 rounded-full ${item.type === 'education' ? 'bg-blue-500' : 'bg-green-500'} shadow-glow z-10 relative`"></div>
              
              <!-- Institution/Company name -->
              <div :class="`mt-4 text-sm font-semibold ${item.type === 'education' ? 'text-blue-400' : 'text-green-400'}`">
                {{ item.name }}
              </div>
              
              <!-- Role -->
              <div class="mt-2 text-xs text-gray-400">
                {{ item.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimelineComponent',
    data() {
      return {
        timelineItems: [
          { period: '2016-2018', name: `St Mary's School`, type: 'education', role: 'Student' },
          { period: '2018-2022', name: 'AJCE', type: 'education', role: 'Student' },
          { period: '2022-2023', name: 'Cognizant', type: 'work', role: ' CSD Intern' },
          { period: '2023-Present', name: 'Concordia University', type: 'education', role: 'Student' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .shadow-glow {
    box-shadow: 0 0 10px 2px currentColor;
  }
  </style>
  