<template>
  <div>
    <section class="section" id="banner">
      <h1>Construindo carreiras de sucesso, promovendo a igualdade de oportunidades.</h1>
    </section>

    <section class="section" id="diversityForYourCompany">
      <h2 class="title">Diversidade para sua empresa</h2>
      <div class="content">
        <img
          :src="require('@/images/diversity_banner.png')"
          alt="Banner diversidade para sua empresa"
        />

        <p>Em nossa plataforma, acreditamos que todos têm o potencial para uma carreira de sucesso.</p>
        <p>Nosso compromisso é fornecer recursos, treinamento e oportunidades para todos, promovendo ativamente a igualdade de oportunidades.</p>
        <p>Juntos, estamos construindo um futuro onde o sucesso profissional não conhece limites e a diversidade é valorizada como uma força motriz para o crescimento e a inovação.</p>
        <p>Junte-se a nós nesta jornada em direção a carreiras mais brilhantes e a um mundo de possibilidades igualitárias.</p>

        <router-link
          class="cta"
          to="register"
        >
          Quero selo DiversificaJobs
        </router-link>

        <h3 class="subtitle">Por que promover diversidade na sua empresa?</h3>

        <div class="icons">
          <div>
            Atrair e reter os melhores talentos no mercado.
          </div>
          <div>
            Atrair e reter os melhores talentos no mercado.
          </div>
          <div>
            Atrair e reter os melhores talentos no mercado.
          </div>
          <div>
            Atrair e reter os melhores talentos no mercado.
          </div>
        </div>

        <h3 class="subtitle">Mentoria para gerência sobre diversidade</h3>

        <p>A diversidade é um valor fundamental nas organizações, não apenas como um princípio ético, mas também como um princípio ético, mas também como um fator crítico para o sucesso nos negócios.</p>
        <p>A diversidade não se limita apenas à representação de diferentes grupos étnicos, de gênero, orientações sexuais e idades, mas também envolve a inclusão de diversas perspectivas, experiências e habilidades.</p>
        <p>Para que as empresas alcancem o pleno potencial da diversidade, é essencial que a gerência esteja bem preparada e engajada nesse processo, e a mentoria desempenha um papel crucial nesse sentido</p>
        <p>A mentoria para gerência sobre diversidade é uma abordagem estratégica para capacitar líderes a compreenderem, valorizarem e promoverem a diversidade em suas equipes e em toda a organização.</p>
        
        <h3 class="subtitle">Mentoria para seus funcionários receberem bem a diversidade</h3>

        <p>Em um mundo cada vez mais globalizado e diversificado, a habilidade de trabalhar eficazmente com pessoas de diferentes origens culturais, étnicas, de gênero, orientações sexuais e experiências de vida é essencial no ambiente de trabalho.</p>
        <p>Para promover a aceitação da diversidade em nossas equipes, implementamos um programa de mentoria que visa criar uma cultura de inclusão e respeito mútuo.</p>
      </div>
      
      <router-link
        class="cta"
        to="register"
      >
        Quero selo DiversificaJobs
      </router-link>
    </section>

    <div class="section purple" id="weFoundAJobForYou">
      <h2 class="title">Encontramos um job pra você</h2>
      <div class="content">
        <img
          :src="require('@/images/diversity_banner.png')"
          alt="Banner diversidade para sua empresa"
        />

        <p>Nossa plataforma é muito mais do que apenas um local de aprendizado. Também é o seu hub para oportunidades de carreira emocionantes.</p>
        <p>Imagine encontrar o emprego certo com facilidade:</p>
        <p>Empresas líderes publicam vagas diretamente na plataforma, conectando-se a uma base de talentos diversificada e altamente qualificada.</p>
        <p>Mas a nossa magia acontece com o match personalizado. Nós facilitamos a correspondência perfeita entre candidatos e empresas com base em habilidades técnicas e objetivos de carreira.</p>
        <p>Isso significa que você pode encontrar o emprego ideal de forma rápida e eficaz, dando um impulso incrível à sua carreira.</p>
        <p>Junte-se a nós e faça seu próximo movimento com confiança!</p>

      </div>
      
      <router-link
        class="cta"
        to="register"
      >
        Quero um job inclusivo!
      </router-link>
    </div>

    <section class="section" id="postHiringFollowUp">
      <h2 class="title">Acompanhamento pós contratação</h2>
      <div class="content">
        <img
          :src="require('@/images/diversity_banner.png')"
          alt="Banner diversidade para sua empresa"
        />

        <p>Não encerramos nosso apoio após a contratação. Continuamos a investir em você:</p>

        <p>Nossa oferta de treinamento contínuo permite que você aprimore suas habilidades técnicas e interpessoais de forma constante.</p>
        <p>Queremos que você se destaque em sua carreira.</p>
        <p>Além disso, oferecemos programas de mentoria e sistemas de apoio para ajudá-lo a atingir todo o seu potencial dentro da organização.</p>
        <p>Seu sucesso é nossa prioridade constante. Estamos aqui para impulsionar o seu crescimento profissional.</p>

      </div>
      
      <router-link
        class="cta"
        to="register"
      >
        Quero acompanhamento!
      </router-link>
    </section>

    <section class="section purple" id="mentoringForYouToGrow">
      <h2 class="title">Mentoria para você crescer</h2>
      <div class="content">
        <img
          :src="require('@/images/diversity_banner.png')"
          alt="Banner diversidade para sua empresa"
        />

        <p>No cenário atual, a diversidade não é apenas um valor desejado, mas um fator essencial para organizações que buscam excelência e inovação.</p>
        <p>No entanto, a diversidade deve começar desde o processo de recrutamento e seleção.</p>
        <p>Para ajudar nossos candidatos a receberem bem a diversidade e destacarem-se nos processos seletivos, oferecemos um programa de mentoria dedicado a essa temática.</p>
      </div>
      
      <router-link
        class="cta"
        to="register"
      >
        Quero um mentor só pra mim!
      </router-link>
    </section>

    <section class="section" id="trainings">
      <h2 class="title">Treinamentos</h2>
      <div class="content">
        <img
          :src="require('@/images/diversity_banner.png')"
          alt="Banner diversidade para sua empresa"
        />

        <h3 class="subtitle">Aprenda como se portar na empresa</h3>
        
        <p>Na sua carreira, a primeira impressão é fundamental, e seu comportamento no ambiente de trabalho desempenha um papel significativo.</p>
        <p>Nossos treinamentos estão aqui para ajudar você a:</p>
        <p>Compreender a cultura da empresa: Saiba como os valores, missão e cultura da empresa influenciam o comportamento e as expectativas no ambiente de trabalho.</p>
        <p>Etiqueta profissional: Aprenda as melhores práticas para se comunicar com colegas, superiores e clientes de maneira eficaz e respeitosa.</p>
        <p>Gestão de conflitos: Desenvolva habilidades para lidar com conflitos de forma construtiva e produtiva, promovendo um ambiente de trabalho harmonioso. Seu sucesso começa aqui.</p>

        <h3 class="subtitle">Aprenda as tecnologias necessárias</h3>
        
        <p>A primeira impressão é crucial, e sua conduta no ambiente de trabalho é um fator determinante em sua trajetória profissional.</p>
        <p>Com nossos treinamentos, você vai:</p>
        <p>Compreender a Cultura Empresarial: Descubra como os valores, missão e cultura da empresa moldam comportamentos e expectativas no ambiente de trabalho.</p>
        <p>Etiqueta Profissional: Domine as melhores práticas para se comunicar de maneira eficaz e respeitosa com colegas, superiores e clientes.</p>
        <p>Gestão de Conflitos: Desenvolva habilidades para abordar conflitos de forma construtiva e produtiva, criando um ambiente de trabalho harmonioso. Sua carreira começa com o pé direito.</p>

        <h3 class="subtitle">Aprenda como cuidar de seus funcionário</h3>
        
        <p>Entendemos que o sucesso de qualquer equipe depende da colaboração e do apoio mútuo.</p>
        <p>Nossos treinamentos foram criados para ajudá-lo a:</p>
        <p>Aprimorar sua liderança: Saiba como liderar de forma inclusiva, promovendo a diversidade e respeitando a individualidade de cada membro da equipe.</p>
        <p>Desenvolver habilidades interpessoais: Refine sua comunicação, empatia e habilidades de escuta ativa para estabelecer relacionamentos de trabalho mais saudáveis e produtivos.</p>
        <p>Dominar o gerenciamento de equipe: Aprenda a motivar e apoiar sua equipe, identificando oportunidades de crescimento e desenvolvimento para cada membro. O sucesso começa com o cuidado com sua equipe.</p>
      </div>
      
      <router-link
        class="cta"
        to="register"
      >
        Quero ser melhor!
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
  #banner {
    height: 320px;
    display: flex;
    align-items: end;
    background-size: cover;
    background-image: url('~@/images/first_banner.png');
    padding: 20px 12px;
    
    h1{
      color: #FFF;
      text-shadow: 0px 4px 4px #00000040;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .icons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;
  }

</style>