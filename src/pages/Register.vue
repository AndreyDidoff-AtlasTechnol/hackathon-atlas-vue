<template>
  <section class="section">
  <h2 class="title">Registro</h2>
  <div class="content">
    <form>
      <select id="identification" @change="setIsCorp($event)">
        <option selected>Eu sou...</option>
        <option value="candidate">Candidato</option>
        <option value="company">Empresa</option>
      </select>

      <input
        v-if="isCorp"
        type="text"
        placeholder="O nome da empresa é ..."
      />

      <input type="text" placeholder="Meu nome é ..." />

      <input
        v-if="isCorp"
        type="text"
        placeholder="Meu cargo é ..."
      />

      <input type="email" placeholder="Qual o seu e-mail?" />

      <select>
        <option value="" selected>Você se considera...</option>
        <option value="1">Mulher</option>
        <option value="2">Homem</option>
        <option value="3">Outro</option>
      </select>

      <input type="text" placeholder="Digite como você se identifica" />

      <input
        v-if="!isCorp"
        type="text"
        placeholder="Digite seu linkedin"
      />

      <fieldset>
        <router-link
        class="cta"
        :to="getUrl"
        >
          Cadastrar
        </router-link>

        <router-link to="login">
          Já sou cadastrado
        </router-link>
      </fieldset>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'register',
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