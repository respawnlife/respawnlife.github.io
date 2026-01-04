<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="logo" @click.prevent="scrollToSection('hero')">Respawn<span>Life</span></a>
      <div class="nav-elements">
        <ul class="nav-menu" :class="{ 'nav-menu-active': isMenuActive }">
          <li class="nav-item"><a href="#" class="nav-link" @click="toggleMenu('home')">{{ $t('nav.home') }}</a></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="toggleMenu('services')">{{ $t('nav.services') }}</a></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="toggleMenu('about')">{{ $t('nav.about') }}</a></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="toggleMenu('team')">{{ $t('nav.team') }}</a></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="toggleMenu('cases')">{{ $t('nav.cases') }}</a></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="toggleMenu('contact')">{{ $t('nav.contact') }}</a></li>
        </ul>
        <div class="lang-switch-navbar">
          <a href="#" class="nav-link" @click.prevent="switchLanguage">
            <i class="fas fa-language fa-lg"></i>
          </a>
        </div>
        <div class="hamburger" :class="{ 'active': isMenuActive }" @click.stop="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'switchLanguage'): void
  (e: 'scrollToSection', sectionId: string): void
}>()

const isMenuActive = ref(false)

// 监听窗口大小变化，当窗口变大时自动关闭菜单
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuActive.value) {
    isMenuActive.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const switchLanguage = () => {
  emit('switchLanguage')
}

const scrollToSection = (sectionId: string) => {
  emit('scrollToSection', sectionId)
}

const toggleMenu = (sectionId?: string) => {
  console.log('toggleMenu', sectionId)
  if (sectionId) {
    emit('scrollToSection', sectionId)
    isMenuActive.value = false
  } else {
    isMenuActive.value = !isMenuActive.value
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  padding: 15px 0;
  transition: var(--transition);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--dark-color);
  text-shadow: 0 0 10px rgba(67, 97, 238, 0.2);
  text-decoration: none;
}

.logo span {
  color: var(--primary-color);
}

.nav-elements {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 30px;
}

.nav-link {
  color: var(--dark-color);
  font-weight: 500;
  transition: var(--transition);
  padding: 8px 0;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--primary-color);
  text-decoration: none;
}

.lang-switch-navbar {
  display: block;
  margin-left: 20px; /* 在导航菜单和语言切换按钮之间留出空间 */
}

.lang-switch-navbar a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px;
  display: block;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: var(--dark-color);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 0; /* 直角 */
}

/* 汉堡菜单动画 */
.hamburger.active .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .nav-elements {
    position: relative;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 20px 0;
    list-style: none;
    margin: 0;
  }

  .nav-menu.nav-menu-active {
    left: 0;
    z-index: 999;
  }

  .nav-item {
    margin: 15px 0;
  }

  .lang-switch-navbar {
    display: block;
    margin-left: 0;
  }

  .lang-switch-navbar a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 1.4rem;
    padding: 5px;
    display: block;
  }

  .hamburger {
    display: flex;
  }
}
</style>