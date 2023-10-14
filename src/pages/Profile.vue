<template>
  <section class="section">
  <div class="content">
    <div class="personal-data">
      <img src="@/images/photoPeople/person_1.png" alt="Profile picture" />
      <div class="personal-data__info">
        <h3>Jorge Alex</h3>
        <p>Front-end com foco em Vue.Js</p>
      </div>
    </div>

    <div class="info">
      <span>Resumo:</span>
      <p>Meu nome é Jorge Alex, e sou um apaixonado desenvolvedor Front-End especializado em Vue.js. Minha jornada no mundo da programação começou com a curiosidade de entender como as coisas funcionavam na web. Rapidamente, me apaixonei pelo processo de transformar conceitos criativos em interfaces funcionais e atraentes</p>
    </div>

    <div class="info">
      <span>Hard-skill:</span>
      <div class="info__skills" style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
        <img src="@/images/icons/js.png" alt="Logomarca JS" />
        <img src="@/images/icons/css.png" alt="Logomarca CSS" />
        <img src="@/images/icons/html.png" alt="Logomarca HTML" />
        <img src="@/images/icons/github.png" alt="Logomarca Github" />
        <img src="@/images/icons/vue.png" alt="Logomarca Vue" />
      </div>
    </div>

    <div class="info">
      <span>Soft-skill:</span>
      <p>Front-end com foco em Vue.Js</p>
      <p>Front-end com foco em Vue.Js</p>
      <p>Front-end com foco em Vue.Js</p>
      <p>Front-end com foco em Vue.Js</p>
      <p>Front-end com foco em Vue.Js</p>
      <p>Front-end com foco em Vue.Js</p>
    </div>
  </div>
  <router-link
    class="cta"
    to="#"
    >
      Quero contratar o Jorge Alex
  </router-link>
</section>
</template>

<script>
export default {
  name: 'user-profile'
}
</script>

<style lang="scss" scoped>
.content{
  margin: 0;
}
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
    }

    span {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
    }

    p{
      font-size: 16px;
      text-align: left;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  p,span {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
  }

  span {
    color: #702FC2;
  }

  &__skills{
    align-items: center;
    display: flex;
    gap: 12px;
  }
}
.cta{
  margin-bottom: 0;
  margin-top: 40px;
  width: 100%;
}
</style>