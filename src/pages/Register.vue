<template>
  <section class="section">
  <h2 class="title">Registro</h2>
  <div class="content">
    <form>
      <select id="identification">
        <option selected>Eu sou...</option>
        <option value="candidate">Candidato</option>
        <option value="company">Empresa</option>
      </select>

      <input
        class="only-company-option"
        style="display: none"
        type="text"
        placeholder="Digite o nome da empresa"
      />

      <input type="text" placeholder="Digite seu nome" />

      <input
        class="only-company-option"
        style="display: none"
        type="text"
        placeholder="Digite seu cargo"
      />

      <input type="email" placeholder="Digite seu e-mail" />

      <select>
        <option selected>Você se considera...</option>
        <option>Homem</option>
        <option>Mulher</option>
        <option>Outro</option>
      </select>

      <input type="text" placeholder="Digite como você se identifica" />

      <input type="text" placeholder="Digite seu linkedin" />

      <button
        type="button"
        style="margin-bottom: 12px"
      >
        Cadastrar
      </button>

      <router-link to="login">
        Já sou cadastrado
      </router-link>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'register'
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