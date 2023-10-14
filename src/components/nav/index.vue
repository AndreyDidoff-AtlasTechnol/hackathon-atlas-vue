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
        <router-link to="login">
            <button class="without-custom" type="button">
                Quero entrar
            </button>
        </router-link>
    </nav>
</template>

<script>
export default {
  name: 'nav-default',
  props: {
    msg: String
  }
}
</script>