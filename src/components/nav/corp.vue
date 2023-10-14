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
        <a class="logout" href="home">
            Sair
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