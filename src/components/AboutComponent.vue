<template>
  <div id="about" class="about-me-container bg-[#1F2226] text-white flex items-center justify-center -mt-20">
    <div class="flex w-full max-w-6xl"> <!-- Increased max-width -->
      <div class="content-wrapper w-full flex">
        <div class="vertical-text-container flex flex-col items-center mr-4">
          <div class="line"></div>
          <div class="vertical-text">ABOUT ME</div>
          <div class="line"></div>
        </div>

        <div class="content-container flex-grow">
          <p class="mb-4">
            Hey there! 👋 I'm an aspiring software developer on a quest to conquer the digital realm, one line of code
            at a time. Currently navigating the exciting waters of academia 📚—because who doesn't love the thrill of
            finals week?—I have a knack for problem-solving that rivals even the most determined Sudoku enthusiasts. 🧩
          </p>
          <p class="mb-4">
            When I'm not busy wrestling with algorithms or deciphering the mysteries of JavaScript 💻, you can find me
            daydreaming about the next big app or getting lost in the latest tech trends. My love for programming is
            matched only by my fascination with caffeine ☕; let's just say they both fuel my late-night coding
            marathons! 🌙
          </p>
          <p class="mb-4">
            I'm a firm believer in the power of continuous learning 🧠. Whether it's diving into a new programming
            language, exploring cutting-edge frameworks, or tinkering with IoT devices, I'm always up for a challenge.
            My GitHub is a treasure trove of projects, each one a testament to my growth and creativity. 🌱
          </p>
          <p class="mb-4">
            When I'm not immersed in the world of bits and bytes, you might catch me attempting to explain programming
            concepts to my houseplants 🌿 (they're great listeners!), or trying to convince my cat that my keyboard is
            not the most comfortable napping spot. 🐱💻
          </p>
          <p>
            Join me on this journey as I turn caffeine into code and dreams into reality. Who knows? Maybe one day, my
            software will change the world 🌍—or at least make your life a little easier (or a lot more fun!). Cheers to
            the adventure ahead, and may your code always compile on the first try! 🚀
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

.about-me-container {
  display: flex;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  /* Ensure padding and border are included in the total width */
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.vertical-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
}

.line {
  width: 2px;
  height: 50px;
  background-color: #00FFFF;
  margin: 1rem 0;
}


.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 1rem 0;
  font-family: "Fira Sans", sans-serif;
  font-weight: 100;
  font-style: normal;
  text-transform: none;
  letter-spacing: 0.05em;
  color: #00FFFF;
  font-size: 2.3rem;
}


.content-container {
  flex: 1;
  max-width: 100%;
  word-wrap: break-word;
  padding: 0 1rem;
}

.content-container p {
  text-align: left;
}
</style>
