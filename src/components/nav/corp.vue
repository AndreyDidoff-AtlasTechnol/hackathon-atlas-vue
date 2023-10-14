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
        
      <router-link class="logout" to="home">Sair</router-link>
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

<style lang="scss" scoped>
    .logout {
        align-items: center;
        background: #702FC2;
        border-radius: 10px;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
        color:#fff;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 600;
        justify-content: center;
        margin: 20px auto;
        padding: 10px 20px;
    }
</style>