<template>
  <section id="contact" class="contact section section-no-background">
    <div class="container">
      <div class="contact-content">
        <h2>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.description') }}</p>
        <div class="contact-buttons">
          <a href="mailto:snowcatvanessa@gmail.com" class="btn">{{ $t('contact.button') }}</a>
          <p class="email-text">{{ $t('contact.email') }}: <a href="mailto:snowcatvanessa@gmail.com">snowcatvanessa@gmail.com</a></p>
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
.contact {
  background: var(--ai-gradient);
  color: white;
  text-align: center;
  padding: 100px 0; /* 增加上下留白 */
  display: flex;
  align-items: center;
}

.contact-content h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
}

.contact-content p {
  font-size: 1.6rem;
  max-width: 700px;
  margin: 0 auto 30px;
  opacity: 0.9;
}

.contact-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.email-text {
  color: white;
  font-size: 1.3rem;
  margin-top: 15px;
}

.email-text a {
  color: white;
  text-decoration: underline;
}

.contact .btn {
  background: white;
  color: var(--primary-color);
  font-weight: 600;
  border-color: white;
  border-radius: 0; /* 改为直角 */
  font-size: 1.3rem;
}

.contact .btn:hover {
  background: transparent;
  color: white;
  border-color: white;
  transform: translateY(-3px) scale(1.05);
}

@media (max-width: 768px) {
  .contact-content h2 {
    font-size: 2rem;
  }
  
  .contact-content p {
    font-size: 1.2rem;
  }
  
  .email-text {
    font-size: 1.1rem;
  }
}
</style>