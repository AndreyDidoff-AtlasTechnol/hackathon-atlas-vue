<template>
  <section class="section">
  <h2 class="title">Vagas</h2>
  <ul class="content">
    <li v-for="index in 3" :key="`job-vacancy-${index}`">
      <div class="title">
        <span>Empresa XPTO</span>
        <span>Vue.JS</span>
      </div>
      <div class="description">
        Buscamos profissionais que se encaixam nesses pré requisitos de ténologia:
      </div>
      <p style="text-align: right">Ver mais...</p>
    </li>
  </ul>
  <button
    class="cta"
    type="button"
  >
    Mais
  </button>
</section>
</template>

<script>
export default {
  name: 'job-vacancy-list',
}
</script>

<style lang="scss" scoped>
.section .content {
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    padding: 12px;
    list-style: none;
    border: 2px solid #702FC2;
    border-radius: 8px;

    .title {
      display: flex;
      justify-content: space-between;

      span:first-of-type {
        font-weight: 600;
      }
    }

    .description {
      margin: 12px 0;
      text-align: left;
    }
  }
}
</style>