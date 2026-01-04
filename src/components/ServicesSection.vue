<template>
  <section id="services" class="services section">
    <div class="container">
      <div class="section-title">
        <h2>{{ $t('services.title') }}</h2>
        <p>{{ $t('services.description') }}</p>
      </div>
      <div class="services-container">
        <div class="service-card">
          <div class="service-content">
            <div class="service-text">
              <h3>{{ $t('services.items.0.title') }}</h3>
              <p>{{ $t('services.items.0.description') }}</p>
              <ul class="feature-list">
                <li><i class="fas fa-check-circle"></i> {{ $t('services.items.0.title') }} with modern frameworks</li>
                <li><i class="fas fa-check-circle"></i> Responsive design for all devices</li>
                <li><i class="fas fa-check-circle"></i> Performance optimization</li>
                <li><i class="fas fa-robot"></i> AI-powered features and automation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-content">
            <div class="service-text">
              <h3>{{ $t('services.items.2.title') }} & {{ $t('services.items.4.title') }}</h3>
              <p>{{ $t('services.items.2.description') }}</p>
              <p>{{ $t('services.items.4.description') }}</p>
              <ul class="feature-list">
                <li><i class="fas fa-check-circle"></i> Custom CRM & ERP solutions</li>
                <li><i class="fas fa-check-circle"></i> Security-first architecture</li>
                <li><i class="fas fa-robot"></i> AI-driven analytics and insights</li>
                <li><i class="fas fa-robot"></i> Intelligent automation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-content">
            <div class="service-text">
              <h3>{{ $t('services.items.1.title') }} & {{ $t('services.items.3.title') }}</h3>
              <p>{{ $t('services.items.1.description') }}</p>
              <p>{{ $t('services.items.3.description') }}</p>
              <ul class="feature-list">
                <li><i class="fas fa-check-circle"></i> Cross-platform mobile apps</li>
                <li><i class="fas fa-check-circle"></i> Cloud infrastructure & deployment</li>
                <li><i class="fas fa-robot"></i> AI-powered mobile experiences</li>
                <li><i class="fas fa-robot"></i> Intelligent cloud services</li>
              </ul>
            </div>
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
.services-container {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: 40px;
}

.service-card {
  flex: 1;
  background: white;
  border-radius: 0; /* 改为直角 */
  box-shadow: var(--box-shadow);
  overflow: hidden;
  border: 1px solid rgba(79, 70, 229, 0.1);
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.service-content {
  flex: 1;
}

.service-text h3 {
  font-size: 1.6rem;  /* 调小标题字号 */
  color: var(--primary-color);
  margin-bottom: 15px;
}

.service-text p {
  font-size: 1rem;  /* 调小描述文字字号 */
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.feature-list {
  list-style: none;
  margin-top: 15px;
}

.feature-list li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: #555;
  font-size: 0.95rem;  /* 调小列表文字字号 */
}

.feature-list i {
  position: absolute;
  left: 0;
  top: 12px;
  color: var(--primary-color);
  width: 20px;
  text-align: center;
}

.feature-list .fa-robot {
  color: var(--ai-color);
}


@media (max-width: 768px) {
  .services-container {
    flex-direction: column;
  }
  
  .service-text h3 {
    font-size: 1.4rem;  /* 移动端调整 */
  }
  
  .service-text p {
    font-size: 0.95rem;  /* 移动端调整 */
  }
  
  .feature-list li {
    font-size: 0.9rem;  /* 移动端调整 */
  }
  
  .service-img {
    max-height: 120px;
  }
}
</style>