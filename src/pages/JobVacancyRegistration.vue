<template>
  <section class="section">
  <h2 class="title">Cadastro Vaga</h2>
  <div class="content">
    <form>
      <select>
        <option selected>Essa vaga é destinada à...</option>
        <option>...</option>
        <option>...</option>
      </select>

      <textarea placeholder="Descrição da vaga"></textarea>

      <input type="email" placeholder="Tecnologias..." />

      <input type="password" placeholder="Valor da vaga..." />

      <button
        type="button"
        style="margin-bottom: 12px"
      >
        Cadastrar
      </button>

      <router-link to="/">
        Voltar
      </router-link>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'job-vacancy-registration'
}
</script>