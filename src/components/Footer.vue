<template>
  <section class="footer section">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-logo">Respawn<span>Life</span></h3>
          <p class="footer-description">{{ $t('footer.description') }}</p>
        </div>
        
        <div class="footer-section">
          <h4>{{ $t('footer.navigation') }}</h4>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="scrollToSection('hero')">{{ $t('nav.home') }}</a></li>
            <li><a href="#" @click.prevent="scrollToSection('services')">{{ $t('nav.services') }}</a></li>
            <li><a href="#" @click.prevent="scrollToSection('about')">{{ $t('nav.about') }}</a></li>
            <li><a href="#" @click.prevent="scrollToSection('team')">{{ $t('nav.team') }}</a></li>
            <li><a href="#" @click.prevent="scrollToSection('cases')">{{ $t('nav.cases') }}</a></li>
            <li><a href="#" @click.prevent="scrollToSection('contact')">{{ $t('nav.contact') }}</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>{{ $t('footer.links') }}</h4>
          <ul class="footer-links">
            <li><a href="https://stocks.respawnlife.com" target="_blank" rel="noopener noreferrer">{{ $t('cases.stocks.title') }}</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>{{ $t('footer.contact') }}</h4>
          <ul class="footer-links">
            <li><a href="mailto:contact@respawnlife.com">contact@respawnlife.com</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} RespawnLife. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'scrollToSection', sectionId: string): void
}>()

const scrollToSection = (sectionId: string) => {
  emit('scrollToSection', sectionId)
}
</script>

<style scoped>
.footer {
  background: #1e293b !important; /* 使用important确保深色背景不被覆盖 */
  color: white;
  padding: 40px 0 20px;
  min-height: auto; /* 让footer自适应高度 */
  display: block; /* 覆盖section的flex布局 */
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section {
  flex: 1;
  min-width: 250px;
  padding: 0 20px;
  margin-bottom: 20px;
}

.footer-logo {
  font-size: 2.2rem;  /* 增大logo字号 */
  margin-bottom: 15px;
  color: white;
}

.footer-logo span {
  color: var(--primary-color);
}

.footer-description {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1.2rem;  /* 增大描述文字字号 */
}

.footer-section h4 {
  font-size: 1.5rem;  /* 增大标题字号 */
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--primary-color);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  transition: var(--transition);
  font-size: 1.1rem;  /* 增大链接文字字号 */
}

.footer-links a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  color: #94a3b8;
  font-size: 1.1rem;  /* 增大底部文字字号 */
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    min-width: 100%;
  }
  
  .footer-logo {
    font-size: 1.8rem;  /* 移动端调整 */
  }
  
  .footer-description {
    font-size: 1rem;  /* 移动端调整 */
  }
  
  .footer-section h4 {
    font-size: 1.3rem;  /* 移动端调整 */
  }
  
  .footer-links a {
    font-size: 1rem;  /* 移动端调整 */
  }
  
  .footer-bottom {
    font-size: 1rem;  /* 移动端调整 */
  }
}
</style>