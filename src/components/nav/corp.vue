<template>
    <nav>
        <ul>
            <router-link to="roadmap">
                <li>RoadMap</li>
            </router-link>
            <router-link to="trainings-corp">
                <li>Treinamentos</li>
            </router-link>
            <router-link to="vacancy">
                <li>Cadastrar vaga</li>
            </router-link>
            <router-link to="vacancies">
                <li>Vagas</li>
            </router-link>
        </ul>
        <router-link to="home">
            <button class="without-custom" type="button">
                Sair
            </button>
        </router-link>
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