<template>
  <section class="section">
    <h2 class="title">Mentoria para seus funcionários </h2>

    <div class="content">
      <p>Esse é um guia estratégico que visa aprimorar as habilidades e o crescimento profissional de colaboradores dentro de uma organização. Ele proporciona um caminho claro para a implementação de programas de mentoria eficazes que resultam em funcionários mais engajados, confiantes e capazes de alcançar todo o seu potencial.
      </p>

      <h3 class="subtitle">Sequência de estudos</h3>
      
      <roadmap :data="roadmapList" />
    </div>
  </section>
</template>

<script>
import Roadmap from '@/components/Roadmap'

export default {
  name: 'roadmap-view',
  components: {
    Roadmap
  },
  data() {
    return {
      roadmapList: [
        {
          title: 'Gerência:',
          items: [
            { name: 'Impacto na sociedade', link: '', icon: 'youtube' },
            { name: 'Minha empresa inclusiva', link: '', icon: 'youtube' },
            { name: 'Resolver conflitos', link: '', icon: 'youtube' },
          ],
        },
        {
          title: 'Funcionário::',
          items: [
            { name: 'Impacto na sociedade', link: '', icon: 'youtube' },
            { name: 'Comunicação não agressiva', link: '', icon: 'youtube' },
          ],
        },
        {
          title: 'Marcar certificação:',
          items: [
            { name: 'Agendar com o mentor', link: '', icon: 'meet' },
          ],
        },
      ]
    }
  }
}
</script>