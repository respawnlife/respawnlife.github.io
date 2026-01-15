<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import TeamSection from './components/TeamSection.vue'
import CaseStudiesSection from './components/CaseStudiesSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const { locale } = useI18n()

const switchLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}

// 滚动到指定部分
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // 计算navbar的高度作为偏移量
    const navbarHeight = 80; // 大约navbar的高度
    window.scrollTo({
      top: element.offsetTop - navbarHeight,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div id="app">
    <Navbar @switch-language="switchLanguage" @scroll-to-section="scrollToSection" />
    <HeroSection @scroll-to-section="scrollToSection" />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <CaseStudiesSection />
    <ContactSection @scroll-to-section="scrollToSection" />
    <Footer @scroll-to-section="scrollToSection" />
  </div>
</template>

<style>
/* 全局样式 */
:root {
  --primary-color: #4f46e5; /* 紫蓝色 */
  --primary-light: #818cf8; /* 浅紫色 */
  --secondary-color: #ec4899; /* 粉色 */
  --dark-color: #1e293b; /* 深灰色 */
  --light-color: #f8fafc; /* 浅色背景 */
  --danger-color: #ef4444; /* 红色 */
  --success-color: #10b981; /* 绿色 */
  --ai-color: #14b8a6; /* 青色，用于AI相关 */
  --ai-gradient: linear-gradient(135deg, #4f46e5, #ec4899);
  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto; /* 禁用平滑滚动 */
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
  overflow-x: hidden; /* 防止横向滚动 */
}

h1, h2, h3, h4, h5 {
  font-weight: 600;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 100px 0; /* 移除全屏高度限制 */
  display: flex;
  align-items: center;
}

/* 斑马纹样式 */
.section:nth-child(even):not([id="hero"]):not(.section-no-background) {
  background-color: #f8fafc; /* 浅灰色背景 */
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 3rem;  /* 增大标题字号 */
  margin-bottom: 15px;
  color: var(--dark-color);
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--ai-gradient);
  border-radius: 0; /* 改为直角 */
}

.section-title p {
  font-size: 1.5rem;  /* 增大描述文字字号 */
  color: #777;
  max-width: 700px;
  margin: 20px auto 0;
}

.btn {
  display: inline-block;
  padding: 15px 35px;  /* 调整按钮大小 */
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 0; /* 改为直角 */
  cursor: pointer;
  font-size: 1.2rem;  /* 增大按钮文字字号 */
  font-weight: 600;
  transition: var(--transition);
  text-decoration: none;
  border: 2px solid var(--primary-color); /* 手绘风格边框 */
}

.btn:hover {
  background: transparent;
  color: var(--primary-color);
  transform: translateY(-3px) scale(1.05);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 0; /* 改为直角 */
}

.btn-outline:hover {
  background: var(--primary-color);
  color: #fff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section {
    padding: 60px 0;
    min-height: auto;
  }
  
  .section-title h2 {
    font-size: 2.2rem;
  }
  
  .section-title p {
    font-size: 1.2rem;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>