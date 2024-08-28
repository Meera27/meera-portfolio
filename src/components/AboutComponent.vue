<template>
  <div id="about" class="about-me-container bg-[#1F2226] text-white flex items-center justify-center -mt-20">
    <div class="flex w-full max-w-4xl">
      <div class="content-wrapper w-full flex">
        <div class="vertical-text-container flex items-center mr-4">
          <div class="vertical-text">ABOUT ME</div>
        </div>
        <div class="content-container flex-grow">
          <p class="mb-4">
            Hey there! 👋 I'm an aspiring software developer on a quest to conquer the digital realm, one line of code at a time. Currently navigating the exciting waters of academia 📚—because who doesn't love the thrill of finals week?—I have a knack for problem-solving that rivals even the most determined Sudoku enthusiasts. 🧩
          </p>
          <p class="mb-4">
            When I'm not busy wrestling with algorithms or deciphering the mysteries of JavaScript 💻, you can find me daydreaming about the next big app or getting lost in the latest tech trends. My love for programming is matched only by my fascination with caffeine ☕; let's just say they both fuel my late-night coding marathons! 🌙
          </p>
          <p>
            Join me on this journey as I turn caffeine into code and dreams into reality. Who knows? Maybe one day, my software will change the world 🌍—or at least make your life a little easier (or a lot more fun!). Cheers to the adventure ahead! 🚀
          </p>
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

.about-me-container {
  display: flex;
  padding: 2rem;
}

.vertical-text-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 1rem 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
  font-style: normal;
  text-transform: none;
  letter-spacing: 0.05em;
  color: #00FFFF;
  transform: rotate(180deg);
  font-size: 2.5rem;
}


</style>
