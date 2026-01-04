<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-title">
        <h2>{{ $t('about.title') }}</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>{{ $t('about.description') }}</p>
          <div class="mission">
            <h3>{{ $t('about.mission') }}</h3>
            <p>{{ $t('about.missionDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this component
</script>

<style scoped>
.about {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.about-text {
  flex: 1;
}

.about-text p {
  font-size: 1.4rem;  /* 增大描述文字字号 */
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.mission {
  padding-top: 30px;
  border-top: 1px solid #dbeafe;
  border-radius: 0; /* 改为直角 */
}

.mission h3 {
  font-size: 2rem;  /* 增大标题字号 */
  color: var(--dark-color);
  margin-bottom: 15px;
}

.mission p {
  font-size: 1.2rem;  /* 增大描述文字字号 */
  color: #666;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .about-text {
    text-align: center;
  }
  
  .mission h3 {
    font-size: 1.6rem;  /* 移动端调整 */
  }
  
  .about-text p {
    font-size: 1.2rem;  /* 移动端调整 */
  }
  
  .mission p {
    font-size: 1rem;  /* 移动端调整 */
  }
}
</style>