<template>
  <div class="success-cases">
    <section class="section">
      <h2 class="title">Cases de Sucesso</h2>
      <div class="content">
        <h3 class="subtitle">Job inclusivo que deu certo</h3>
        <div class="cards">
          <div>
            <img src="@/images/photoPeople/person_1.png" alt="Success case image">
            Trabalhar na DiversificaJobs me permite cumprir plenamente minha vocação, transformando o ambiente de trabalho em um lugar mais respeitoso e inclusivo, tornando meu trabalho um sonho realizado.
          </div>
          <div>
            <img src="@/images/photoPeople/person_2.png" alt="Success case image">
            Trabalhar na DiversificaJobs me permite cumprir plenamente minha vocação, transformando o ambiente de trabalho em um lugar mais respeitoso e inclusivo, tornando meu trabalho um sonho realizado.
          </div>
          <div>
            <img src="@/images/photoPeople/person_3.png" alt="Success case image">
            Trabalhar na DiversificaJobs me permite cumprir plenamente minha vocação, transformando o ambiente de trabalho em um lugar mais respeitoso e inclusivo, tornando meu trabalho um sonho realizado.
          </div>
          <div>
            <img src="@/images/photoPeople/person_4.png" alt="Success case image">
            Trabalhar na DiversificaJobs me permite cumprir plenamente minha vocação, transformando o ambiente de trabalho em um lugar mais respeitoso e inclusivo, tornando meu trabalho um sonho realizado.
          </div>
        </div>
      </div>
    </section>
    <section class="section  section--purple">
      <div class="content">
        <h3 class="subtitle">Diversidade que deu certo!</h3>
        <div class="cards cards--corps">
          <div class="corp">
            <div class="corp__img">
              <img src="@/images/badges/empresa1.png" alt="Success case image">
            </div>
            Estamos gratos por essa colaboração junto a DiversificaJobs e ansiosos pelo que o futuro nos reserva na promoção da diversidade e excelência em nossa empresa.
          </div>
          <div class="corp">
            <div class="corp__img">
              <img src="@/images/badges/empresa1.png" alt="Success case image">
            </div>
            A abordagem personalizada e estratégica da DiversificaJobs tem sido fundamental para superar nossas metas de diversidade e inclusão, resultando em um ambiente de trabalho mais produtivo e positivo.
          </div>
          <div class="corp">
            <div class="corp__img">
              <img src="@/images/badges/empresa1.png" alt="Success case image">
            </div>
            Após nossa parceria com a DiversificaJobs, experimentamos melhorias notáveis no desempenho de nossa equipe e observamos um aumento significativo na felicidade de nossos colaboradores.
          </div>
          <div class="corp">
            <div class="corp__img">
              <img src="@/images/badges/empresa1.png" alt="Success case image">
            </div>
            Estamos gratos por essa colaboração junto a DiversificaJobs e ansiosos pelo que o futuro nos reserva na promoção da diversidade e excelência em nossa empresa.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'success-cases',
}
</script>

<style lang="scss" scoped>
.cards{
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }

  div img {
    margin-bottom: 16px;
  }
  
  &--corps{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;
    margin: 0 auto;

    .corp{
      width: 150px;

      &__img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: #fff;
        padding: 25px 5px;
        margin: 10px auto ;

        img {
          width: 100%;
        }
      }
    }
  }
}
.section--purple{
  background: #702FC2;
  margin-bottom: 40px;
  .subtitle,.cards div{
    color: #fff;
  }
}
</style>