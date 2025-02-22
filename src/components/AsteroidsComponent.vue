<template>
    <div class="asteroids-overlay">
        <div class="asteroids-container">
            <div v-for="n in 300" :key="n" class="asteroid" :style="{
                '--delay': `${Math.random() * 8}s`,
                '--duration': `${6 + Math.random() * 8}s`,
                '--top': `${Math.random() * 120 - 10}%`,
                '--size': `${1.5 + Math.random() * 2.5}px`
            }">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AsteroidsComponent'
}
</script>

<style scoped>

.asteroids-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
}

.asteroids-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.asteroid {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: #00FFFF;
    opacity: 0.8;
    top: var(--top);
    left: -10px;
    animation: asteroid var(--duration) linear var(--delay) infinite;
    box-shadow:
        0 0 15px #00FFFF,
        0 0 25px #00FFFF,
        0 0 35px rgba(0, 255, 255, 0.7),
        0 0 45px rgba(0, 255, 255, 0.5);
    border-radius: 50%;
    filter: blur(0.5px);
}

@keyframes asteroid {
    0% {
        transform: translateX(-10vw) rotate(45deg) scale(0.5);
        opacity: 0;
    }

    10% {
        opacity: 0.8;
        transform: translateX(10vw) rotate(45deg) scale(1);
    }

    90% {
        opacity: 0.8;
        transform: translateX(90vw) rotate(45deg) scale(1);
    }

    100% {
        transform: translateX(110vw) rotate(45deg) scale(0.5);
        opacity: 0;
    }
}

.asteroid:nth-child(2n) {
    box-shadow:
        0 0 20px #00FFFF,
        0 0 30px #00FFFF,
        0 0 40px rgba(0, 255, 255, 0.8),
        0 0 50px rgba(0, 255, 255, 0.6);
}

.asteroid:nth-child(3n) {
    box-shadow:
        0 0 25px #00FFFF,
        0 0 35px #00FFFF,
        0 0 45px rgba(0, 255, 255, 0.9),
        0 0 55px rgba(0, 255, 255, 0.7);
}

.asteroid:nth-child(2n) {
    box-shadow:
        0 0 20px #00FFFF,
        0 0 30px #00FFFF,
        0 0 40px rgba(0, 255, 255, 0.8),
        0 0 50px rgba(0, 255, 255, 0.6);
}

.asteroid:nth-child(3n) {
    box-shadow:
        0 0 25px #00FFFF,
        0 0 35px #00FFFF,
        0 0 45px rgba(0, 255, 255, 0.9),
        0 0 55px rgba(0, 255, 255, 0.7);
}
.asteroid:nth-child(4n) {
    transform: rotate(30deg);
}

.asteroid:nth-child(4n+1) {
    transform: rotate(45deg);
}

.asteroid:nth-child(4n+2) {
    transform: rotate(60deg);
}

.asteroid:nth-child(4n+3) {
    transform: rotate(15deg);
}
</style>