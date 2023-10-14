<template>
    <nav>
        <ul>
            <a href="/">
                <li>Início</li>
            </a>
            <a href="trainings">
                <li>Treinamentos</li>
            </a>
            <a href="how-it-works">
                <li>Como funciona?</li>
            </a>
            <a href="success-cases">
                <li>Cases de sucesso</li>
            </a>
            <a href="badge-diversifica-jobs">
                <li>Selo DiversificaJobs</li>
            </a>
        </ul>
        <a href="login">
            <button class="without-custom" type="button">
                Quero entrar
            </button>
        </a>
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