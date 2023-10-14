<template>
  <section class="section">
  <h2 class="title">Mentoria para seus funcionários </h2>
  <div class="content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    <br /><br />
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