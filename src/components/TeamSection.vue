<template>
  <section id="team" class="team section">
    <div class="container">
      <div class="section-title">
        <h2>{{ $t('team.title') }}</h2>
        <p>{{ $t('team.description') }}</p>
      </div>
      <div class="team-container">
        <div class="team-member">
          <div class="member-position">
            <h3>{{ $t('team.frontend.role') }}</h3>
            <div class="experience">{{ $t('team.frontend.experience') }}</div>
            <p class="description">{{ $t('team.frontend.description') }}</p>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-position">
            <h3>{{ $t('team.backend.role') }}</h3>
            <div class="experience">{{ $t('team.backend.experience') }}</div>
            <p class="description">{{ $t('team.backend.description') }}</p>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-position">
            <h3>{{ $t('team.design.role') }}</h3>
            <div class="experience">{{ $t('team.design.experience') }}</div>
            <p class="description">{{ $t('team.design.description') }}</p>
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
.team-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.team-member {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  background: white;
  border-radius: 0;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  border: 1px solid rgba(79, 70, 229, 0.1);
  padding: 30px;
  text-align: center;
}

.member-position h3 {
  font-size: 1.8rem;  /* 增大职位标题字号 */
  color: var(--primary-color);
  margin-bottom: 10px;
}

.experience {
  font-weight: 600;
  color: var(--ai-color);
  margin-bottom: 15px;
  font-size: 1.3rem;  /* 增大经验文字字号 */
}

.description {
  color: #666;
  line-height: 1.6;
  text-align: left;
  font-size: 1.1rem;  /* 增大描述文字字号 */
}

@media (max-width: 768px) {
  .team-container {
    flex-direction: column;
    align-items: center;
  }
  
  .team-member {
    width: 100%;
  }
  
  .member-position h3 {
    font-size: 1.6rem;  /* 移动端调整 */
  }
  
  .description {
    font-size: 1rem;  /* 移动端调整 */
  }
}
</style>