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
        <a class="login" href="home">
            Sair
        </a>
    </nav>
</template>

<script>
export default {
  name: 'nav-user'
}
</script>

<style lang="scss" scoped>
    .login {
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