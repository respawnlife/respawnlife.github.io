<template>
  <section id="hero" class="hero section-no-background">
    <div class="container">
      <div class="hero-content">
        <h1>{{ $t('hero.title') }}</h1>
        <p class="slogan">{{ $t('hero.slogan') }}</p>
        <p>{{ $t('hero.description') }}</p>
        <div class="hero-btns">
          <a href="#" class="btn" @click.prevent="scrollToSection('services')">{{ $t('hero.getStarted') }}</a>
          <a href="#" class="btn btn-outline" @click.prevent="scrollToSection('about')">{{ $t('hero.learnMore') }}</a>
        </div>
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
.hero {
  padding: 160px 0 100px 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  border-radius: 0; /* 改为直角 */
  /* background: var(--ai-gradient); */
  opacity: 0.05;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -50%;
  left: -10%;
  width: 600px;
  height: 600px;
  border-radius: 0; /* 改为直角 */
  /* background: var(--ai-gradient); */
  opacity: 0.05;
  z-index: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: var(--dark-color);
  line-height: 1.2;
}

.slogan {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 30px;
}

.hero-btns {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: 140px 0 60px 0;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .slogan {
    font-size: 1.5rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .hero-btns {
    flex-direction: column;
    align-items: center;
  }
}
</style>