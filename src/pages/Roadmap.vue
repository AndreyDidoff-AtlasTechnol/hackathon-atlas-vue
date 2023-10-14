<template>
  <section class="section">
    <h2 class="title">RoadMap</h2>

    <div class="content">
      <p>Este é um guia estratégico projetado para desenvolvedores que buscam aprimorar sua habilidade de comunicação não ofensiva.</p>

      <p>Essa habilidade é crucial para a construção de relacionamentos saudáveis e produtivos em todos os aspectos da vida, abrangendo desde o ambiente de trabalho até interações pessoais, e tem um impacto significativo na sociedade como um todo.</p>

      <p>Ao mesmo tempo, o guia aborda a jornada de desenvolvedores que desejam criar interfaces de usuário impressionantes e experiências interativas na web.</p>

      <p>Começa pelos fundamentos, abrangendo conceitos-chave como HTML, CSS e JavaScript, antes de avançar para tópicos mais avançados, como o uso de frameworks, gerenciamento de estado e otimização de desempenho.</p>

      <p>Os desenvolvedores também aprendem a criar interfaces responsivas, acessíveis e seguras, além de dominar a integração de APIs externas.</p>

      <p>Não podemos esquecer a importância das ferramentas de build, testes e controle de versão, que são pilares essenciais no desenvolvimento de aplicações web de alta qualidade</p>

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
          title: 'Comunicação na Empresa:',
          items: [
            { name: 'Impacto na sociedade', link: '', icon: 'youtube' },
            { name: 'Comunicação não agressiva', link: '', icon: 'youtube' },
          ],
        },
        {
          title: 'Conhecimento Técnico - Básico:',
          items: [
            { name: 'Curso de HTML e CSS', link: '', icon: 'youtube' },
            { name: 'Curso de Javascript', link: '', icon: 'youtube' },
            { name: 'Curso de CSS / SASS', link: '', icon: 'youtube' },
          ],
        },
        {
          title: 'Conhecimento Técnico - Avançado:',
          items: [
            { name: 'Curso de VueJS 3', link: '', icon: 'youtube' },
            { name: 'Curso de Tailwind', link: '', icon: 'youtube' },
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