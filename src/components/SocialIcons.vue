<template>
  <div class="social-icons-container" :class="{ 'in-footer': inFooter }">
    <div class="social-icons">
      <a href="https://github.com/Meera27" class="social-icon" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/meeramnair99/" class="social-icon" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/meera.nair.71/" class="social-icon" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/meeramnair._/" class="social-icon" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="vertical-line" v-if="!inFooter"></div>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  props: {
    inFooter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.social-icons-container {
  position: fixed;
  left: 2rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.social-icon {
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #00FFFF;
  transform: translateY(-3px);
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}

.fab {
  font-size: 1.5rem;
}

.vertical-line {
  width: 1px;
  height: 6rem;
  background-color: white;
}

.in-footer {
  position: static;
  margin-top: 0;
}

.in-footer .social-icons {
  flex-direction: row;
  margin-bottom: 0;
  gap: 2rem;
}

.in-footer .social-icon {
  margin: 0;
}

@media (max-width: 768px) {
  .social-icons-container:not(.in-footer) {
    display: none;
  }

  .in-footer {
    width: 100%;
    justify-content: center;
  }

  .in-footer .social-icons {
    gap: 1.5rem;
  }

  .fab {
    font-size: 1.25rem;
  }
}
</style>