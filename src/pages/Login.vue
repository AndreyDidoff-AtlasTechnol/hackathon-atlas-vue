<template>
  <section class="section">
  <h2 class="title">Login</h2>
  <div class="content">
    <form>
      <select>
        <option selected>Eu sou...</option>
        <option>Candidato</option>
        <option>Empresa</option>
      </select>

      <input type="email" placeholder="Digite seu e-mail" />

      <input type="password" placeholder="Digite sua senha" />

      <button
        type="button"
        style="margin-bottom: 12px"
      >
        Entrar
      </button>

      <router-link to="register">
        Quero me cadastrar
      </router-link>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  background-color: #702FC2;
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
  color: #FFF;
}
</style>