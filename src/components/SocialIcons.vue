<template>
  <div class="social-icons-container">
    <div class="social-icons">
      <a href="https://github.com/Meera27" class="social-icon"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/meeramnair99/" class="social-icon"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.facebook.com/meera.nair.71/" class="social-icon"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/meeramnair._/" class="social-icon"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="vertical-line"></div>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons'
}
</script>

<style scoped>
.social-icons-container {
  position: fixed;
  left: 1rem;
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
  margin-bottom: 1rem;
}

.social-icon {
  margin-bottom: 1rem;
  color: white;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  color: #00FFFF;
  transform: translateY(-3px);
}

.fab {
  font-size: 1.5rem;
}

.vertical-line {
  width: 1px;
  height: 6rem;
  background-color: white;
}

@media (max-width: 825px) {
  .social-icons-container {
    position: static;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(31, 34, 38, 0.9);
    padding: 0.5rem 0;
  }

  .social-icons {
    flex-direction: row;
    margin-bottom: 0;
  }

  .social-icon {
    margin: 0 0.5rem;
  }

  .vertical-line {
    display: none;
  }

  .fab {
    font-size: 1.25rem;
  }
}
</style>
