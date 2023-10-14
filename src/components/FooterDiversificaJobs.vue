<template>
    <footer>
      <section class="section" :class="color" id="companiesWithDiversificaJobsBadge">
        <h2 class="title">Empresas com selo DiversificaJobs</h2>
        <div class="content">
          <div class="badges">
            <div class="badge">
              <img :src="require('@/images/badges/empresa1.png')" alt="Empresa 1">
            </div>
            <div class="badge">
              <img :src="require('@/images/badges/empresa1.png')" alt="Empresa 1">
            </div>
            <div class="badge">
              <img :src="require('@/images/badges/empresa1.png')" alt="Empresa 1">
            </div>
            <div class="badge">
              <img :src="require('@/images/badges/empresa1.png')" alt="Empresa 1">
            </div>
            <div class="badge">
              <img :src="require('@/images/badges/empresa1.png')" alt="Empresa 1">
            </div>
            <div class="badge">
              <img :src="require('@/images/badges/empresa1.png')" alt="Empresa 1">
            </div>
          </div>
        </div>
        <a
          class="cta"
          href="register"
        >
          Quero selo DiversificaJobs
      </a>
      </section>
    </footer>
</template>

<script>
    export default {
        name: 'footer-diversifica-jobs',
        props:{
          color:{
            type: String,
            default: 'purple'
          }
        }
    }
</script>

<style lang="scss" scoped>
.badges{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 20px;
  margin: 0 auto;

  .badge{
    width: 100px;
    height: 100px;
    border: 2px solid #5A1CAE;;
    border-radius: 50px;
    background: #fff;
    padding: 25px 5px;
    margin: 10px;

    img {
      width: 100%;
    }
  }
}
</style>