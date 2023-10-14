<template>
    <footer>
      <section class="section purple" id="companiesWithDiversificaJobsBadge">
        <h2 class="title">Empresas com selo DiversificaJobs</h2>
        <div class="content">
          <img
            :src="require('@/images/diversity_banner.png')"
            alt="Banner diversidade para sua empresa"
          />
        </div>
        <button
          class="cta"
          type="button"
        >
          Quero selo DiversificaJobs
        </button>
      </section>
    </footer>
</template>

<script>
    export default {
        name: 'footer-diversifica-jobs'
    }
</script>

<style lang="scss" scoped>

</style>