<template>
    <nav>
        <ul>
            <router-link
                to="/"
                @click="$emit('toggle-menu')"
            >
                <li>Início</li>
            </router-link>
            <router-link
                to="trainings"
                @click="$emit('toggle-menu')"
            >
                <li>Treinamentos</li>
            </router-link>
            <router-link
                to="how-it-works"
                @click="$emit('toggle-menu')"
            >
                <li>Como funciona?</li>
            </router-link>
            <router-link
                to="success-cases"
                @click="$emit('toggle-menu')"
            >
                <li>Cases de sucesso</li>
            </router-link>
            <router-link
                to="badge-diversifica-jobs"
                @click="$emit('toggle-menu')"
            >
                <li>Selo DiversificaJobs</li>
            </router-link>
        </ul>
        <router-link
            class="login"
            to="register"
            @click="$emit('toggle-menu')"
        >
            Quero entrar
        </router-link>
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