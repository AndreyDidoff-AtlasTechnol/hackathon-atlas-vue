<template>
  <section class="section">
  <h2 class="title">Cases de Sucesso</h2>
  <div class="content">
    <h3 class="subtitle">Job inclusivo que deu certo</h3>
    <div class="cards">
      <div>
        <img src="@/images/photoPeople/person_1.png" alt="Success case image">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </div>
      <div>
        <img src="@/images/photoPeople/person_2.png" alt="Success case image">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </div>
      <div>
        <img src="@/images/photoPeople/person_3.png" alt="Success case image">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </div>
      <div>
        <img src="@/images/photoPeople/person_4.png" alt="Success case image">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'success-cases',
}
</script>

<style lang="scss" scoped>
.cards{
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }

  div img {
    margin-bottom: 16px;
  }
}
</style>