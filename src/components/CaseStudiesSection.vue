<template>
  <section id="cases" class="cases section">
    <div class="container">
      <div class="section-title">
        <h2>{{ $t('cases.title') }}</h2>
        <p>{{ $t('cases.description') }}</p>
      </div>
      <div class="cases-container">
        <div class="case-card">
          <h3>{{ $t('cases.ai.title') }}</h3>
          <p>{{ $t('cases.ai.description') }}</p>
          <a href="#contact" class="btn">{{ $t('cases.contactButton') }}</a>
        </div>
        
        <div class="case-card">
          <h3>{{ $t('cases.app.title') }}</h3>
          <p>{{ $t('cases.app.description') }}</p>
          <a href="#contact" class="btn">{{ $t('cases.contactButton') }}</a>
        </div>
        
        <div class="case-card">
          <h3>{{ $t('cases.website.title') }}</h3>
          <p>{{ $t('cases.website.description') }}</p>
          <a href="#contact" class="btn">{{ $t('cases.contactButton') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this component
</script>

<style scoped>
.cases-container {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: 40px;
}

.case-card {
  flex: 1;
  padding: 30px;
  background: white;
  border-radius: 0;
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(79, 70, 229, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.case-card h3 {
  font-size: 1.6rem;  /* 增大标题字号 */
  color: var(--primary-color);
  margin-bottom: 15px;
}

.case-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
  font-size: 1.1rem;  /* 增大描述文字字号 */
}

.case-card .btn {
  align-self: center;
}

@media (max-width: 768px) {
  .cases-container {
    flex-direction: column;
  }
  
  .case-card h3 {
    font-size: 1.4rem;  /* 移动端调整 */
  }
  
  .case-card p {
    font-size: 1rem;  /* 移动端调整 */
  }
}
</style>