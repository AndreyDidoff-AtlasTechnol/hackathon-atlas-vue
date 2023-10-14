<template>
  <section class="section">
    <h2 class="title">Vaga</h2>
    <div class="content">
      <form>
        <select name="type">
          <option value="" disabled selected>Essa vaga é destinada a ...</option>
          <option value="1">Afirmativa negros</option>
          <option value="2">Afirmativa LGBTQIA+</option>
          <option value="3">Afirmativa mulheres</option>
          <option value="4">Todos</option>
        </select>

        <input type="text" placeholder="Tecnologias..." />

        <input type="text" placeholder="Valor da vaga..." />

        <router-link
          class="cta"
          to="job-vacancy-list"
        >
          Procurar
        </router-link>

        <router-link to="trainings">
          Voltar
        </router-link>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'job-vacancy-search',
}
</script>

<style lang="scss" scoped>
  .cta{
      margin-top: 0;
    }
</style>