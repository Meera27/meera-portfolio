<template>
  <div id="about" class="about-me-container bg-[#1F2226] text-white flex items-center justify-center -mt-20">
    <div class="flex w-full max-w-6xl">
      <div class="content-wrapper w-full flex">
        <div class="vertical-text-container flex flex-col items-center mr-4">
          <div class="line"></div>
          <div class="vertical-text">ABOUT ME</div>
          <div class="line"></div>
        </div>

        <div class="content-container flex-grow">
          <p class="mb-4">
            Hey there! 👋 I'm a code-slinging, caffeine-fueled software developer in training. By day, I'm battling finals and debugging my life choices. By night, I'm convincing my cat that keyboards aren't beds and explaining binary to my houseplants. 🌿🐱💻
          </p>
          <p class="mb-4">
            My superpower? Turning coffee into code and procrastination into "performance testing." 😉 When I'm not romancing my IDE or sweet-talking algorithms, I'm probably lost in a Stack Overflow rabbit hole or trying to make my GitHub look cooler than my Instagram.
          </p>
          <p>
            Join me as I attempt to change the world one semicolon at a time. Who knows? I might just create an app that finally explains to my mom what I actually do! 🚀 Until then, may your code be bug-free and your coffee be strong! ☕
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
  height: 20px;
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
  font-size: 1.3rem;
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
