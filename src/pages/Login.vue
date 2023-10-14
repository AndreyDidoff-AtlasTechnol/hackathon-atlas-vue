<template>
  <section class="section">
  <h2 class="title">Login</h2>
  <div class="content">
    <form>
      <select @change="setIsCorp($event)">
        <option selected>Eu sou...</option>
        <option value="candidate">Candidato</option>
        <option value="company">Empresa</option>
      </select>

      <input type="email" placeholder="Digite seu e-mail" />

      <input type="password" placeholder="Digite sua senha" />
      
      <fieldset>
        <router-link
        class="cta"
        :to="getUrl"
        >
          Entrar
        </router-link>

        <router-link to="register">
          Quero me cadastrar
        </router-link>
      </fieldset>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      isCorp: false
    }
  },
  computed:{
    getUrl(){
      return this.isCorp ?'trainings-corp':'roadmap'
    }
  },
  methods:{
    setIsCorp(event){
      let value = event.target.value
      this.isCorp = (value == 'company' ? true : false);
    }
  }
}
</script>

<style lang="scss" scoped>
  fieldset{
    border: none;
    display: flex;
    flex-direction: column;
    .cta{
      margin-top: 0;
    }
  }
</style>