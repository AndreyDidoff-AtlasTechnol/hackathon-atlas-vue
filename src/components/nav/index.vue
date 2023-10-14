<template>
    <nav>
        <ul>
            <router-link to="/">
                <li>Início</li>
            </router-link>
            <router-link to="trainings">
                <li>Treinamentos</li>
            </router-link>
            <router-link to="how-it-works">
                <li>Como funciona?</li>
            </router-link>
            <router-link to="success-cases">
                <li>Cases de sucesso</li>
            </router-link>
            <router-link to="badge-diversifica-jobs">
                <li>Selo DiversificaJobs</li>
            </router-link>
        </ul>
        <router-link class="login" to="login">Quero entrar</router-link>
    </nav>
</template>

<script>
export default {
  name: 'nav-default'
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