<template>
    <nav>
        <ul>
            <a href="roadmap">
                <li>RoadMap</li>
            </a>
            <a href="trainings-corp">
                <li>Treinamentos</li>
            </a>
            <a href="vacancy">
                <li>Cadastrar vaga</li>
            </a>
            <a href="vacancies">
                <li>Vagas</li>
            </a>
        </ul>
        <a href="home">
            <button class="without-custom" type="button">
                Sair
            </button>
        </a>
    </nav>
</template>

<script>
export default {
  name: 'nav-corp',
  props: {
    msg: String
  }
}
</script>