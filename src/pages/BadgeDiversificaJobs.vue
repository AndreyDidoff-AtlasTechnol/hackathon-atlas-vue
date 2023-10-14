<template>
  <div id="badge">
    <section class="section">
      <h2 class="title">Como funciona?</h2>
      <div class="content">
        <h3 class="subtitle">O que é o selo DiversificaJobs ?</h3>
        O Selo DiversificaJobs é uma certificação exclusiva e reconhecida que destaca o compromisso de uma empresa com a promoção da diversidade e inclusão no ambiente de trabalho. Ele representa um padrão de excelência em igualdade de oportunidades e representa um passo importante na construção de uma cultura corporativa mais inclusiva.
        <br/><br/>
        <h3 class="subtitle">Como obter o selo  DiversificaJobs?</h3>
        Aqui está como funciona para ser um detentor do Selo DiversificaJobs.
        <ul>
          <li>Avaliação Objetiva: Para conquistar o Selo DiversificaJobs, uma empresa passa por uma avaliação rigorosa de suas práticas, políticas e cultura organizacional em relação à diversidade e inclusão. Isso inclui a revisão de políticas de recrutamento, programas de treinamento, igualdade salarial e muito mais.</li>
          <li>Compromisso com a Mudança: A empresa deve demonstrar um compromisso claro com a promoção da diversidade em todas as suas formas, incluindo gênero, raça, origem étnica, orientação sexual, idade e habilidades diferentes.</li>
          <li>Implementação de Práticas Inclusivas: É fundamental que a empresa esteja implementando práticas e políticas inclusivas, como programas de mentoria, treinamentos em diversidade e inclusão, e medidas para eliminar vieses inconscientes.</li>
        </ul>
        <br/><br/>
        <h3 class="subtitle">Vantagens de ser DiversificaJobs</h3>
        <ul>
          <li>Visibilidade e Reconhecimento: O Selo DiversificaJobs é um símbolo de orgulho e reconhecimento público pelo compromisso da empresa com a diversidade e inclusão. Isso melhora a imagem da marca e a reputação da empresa.</li>
          <li>Atração de Talentos Diversificados: As empresas detentoras do Selo DiversificaJobs têm uma vantagem competitiva na atração de talentos diversos, que procuram organizações que valorizem a inclusão.</li>
          <li>Retenção de Funcionários: A promoção da diversidade e inclusão aumenta a satisfação dos funcionários e a retenção, uma vez que os colaboradores se sentem valorizados e respeitados.</li>
          <li>Inovação e Desempenho: Diversas equipes tendem a ser mais inovadoras e criativas, resultando em melhores desempenhos e soluções mais eficazes.</li>
          <li>Comunidade e Responsabilidade Social: Ser um detentor do Selo DiversificaJobs demonstra um compromisso sólido com a responsabilidade social corporativa e com a construção de uma comunidade empresarial inclusiva.</li>
          <li>Apoio e Recursos: As empresas com o Selo DiversificaJobs têm acesso a uma rede exclusiva de apoio e recursos, incluindo compartilhamento de melhores práticas e eventos para o desenvolvimento contínuo de políticas de diversidade e inclusão.</li>
        </ul>
      </div>
      
      <router-link
        class="cta"
        to="register"
        >
          Quero um selo DiversificaJobs
      </router-link>
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
        <router-link
          class="cta"
          to="register"
          >
            Quero um selo DiversificaJobs
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'badge-diversifica-jobs'
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
  .subtitle,.cards div{
    color: #fff;
  }
  .cta{
    background: #fff;
    color: #702FC2;
  }
}
</style>