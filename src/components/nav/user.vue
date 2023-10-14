<template>
    <nav>
        <ul>
            <router-link to="roadmap">
                <li>RoadMap</li>
            </router-link>
            <router-link to="trainings">
                <li>Treinamentos</li>
            </router-link>
            <router-link to="vacancies">
                <li>Vagas</li>
            </router-link>
            <router-link to="Perfil">
                <li>Perfil</li>
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
  name: 'nav-user',
  props: {
    msg: String
  }
}
</script>