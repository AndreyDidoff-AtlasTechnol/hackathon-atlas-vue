<template>
    <nav>
        <ul>
            <a href="roadmap">
                <li>RoadMap</li>
            </a>
            <a href="trainings">
                <li>Treinamentos</li>
            </a>
            <a href="vacancies">
                <li>Vagas</li>
            </a>
            <a href="Perfil">
                <li>Perfil</li>
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
  name: 'nav-user',
  props: {
    msg: String
  }
}
</script>