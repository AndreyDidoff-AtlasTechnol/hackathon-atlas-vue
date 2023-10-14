<template>
  <section class="section">
  <h2 class="title">Perfil</h2>
  <div class="content">
    <div class="personal-data">
      <img src="@/images/photoPeople/person_1.png" alt="Profile picture" />
      <div class="personal-data__info">
        <h3>Jorge Alex</h3>
        <p>Front-end com foco em Vue.Js</p>
      </div>
    </div>

    <div class="info">
      <p>Resumo:</p>
      Meu nome é Jorge Alex, e sou um apaixonado desenvolvedor Front-End especializado em Vue.js. Minha jornada no mundo da programação começou com a curiosidade de entender como as coisas funcionavam na web. Rapidamente, me apaixonei pelo processo de transformar conceitos criativos em interfaces funcionais e atraentes
    </div>

    <div class="info">
      <p>Hard-skill:</p>
      <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
        <img src="@/images/icons/js.png" alt="Logomarca JS" />
        <img src="@/images/icons/css.png" alt="Logomarca CSS" />
        <img src="@/images/icons/html.png" alt="Logomarca HTML" />
        <img src="@/images/icons/github.png" alt="Logomarca Github" />
        <img src="@/images/icons/vue.png" alt="Logomarca Vue" />
      </div>
    </div>

    <div class="info">
      <p>Soft-skill:</p>
      Front-end com foco em Vue.Js
      <br />
      Front-end com foco em Vue.Js
      <br />
      Front-end com foco em Vue.Js
      <br />
      Front-end com foco em Vue.Js
      <br />
      Front-end com foco em Vue.Js
      <br />
      Front-end com foco em Vue.Js
    </div>
  </div>
  <button
    class="cta"
    type="button"
  >
    Quero contratar
  </button>
</section>
</template>

<script>
export default {
  name: 'user-profile'
}
</script>

<style lang="scss" scoped>
.personal-data {
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-inline: auto;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  &__info {
    h3 {
      text-align: left;
      font-size: 24px;
      font-weight: 600;
      color: #702FC2;
      margin-bottom: 8px;
    }

    span {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
    }
  }
}

.info {
  text-align: left;

  p {
    text-align: left;
    color: #702FC2;
  }
}
</style>