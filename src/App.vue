<template>
  <main>
    <header>
      <button
        class="menu without-custom"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="logo">
        DiversificaJobs
      </div>

      <nav-corp v-if="isCorpLogged" @toggle-menu="toggleMenu"></nav-corp>
      <nav-user v-else-if="isUserLogged" @toggle-menu="toggleMenu"></nav-user>
      <nav-default v-else @toggle-menu="toggleMenu"></nav-default>
    </header>
    <router-view />
    <footer-diversifica-jobs />
  </main>
</template>

<script>
import navDefault from '@/components/nav/index'
import navCorp from '@/components/nav/corp.vue'
import navUser from '@/components/nav/user.vue'
import FooterDiversificaJobs from './components/FooterDiversificaJobs.vue'

export default {
  name: 'App',
  props:{
    isCorpLogged:{
      type: Boolean,
      default: false
    },
    isUserLogged:{
      type: Boolean,
      default: false
    },
  },
  components: {
    FooterDiversificaJobs,
    navDefault,
    navCorp,
    navUser
  },
  methods:{
    toggleMenu() {
      document.querySelector('button.menu').classList.toggle("active");
      document.querySelector('nav').classList.toggle("active");
    },
    closeMenu() {
      document.querySelector('button.menu').classList.remove("active");
      document.querySelector('nav').classList.remove("active");
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat;
  color: #4C484D;
}

li {
  list-style-position: inside;
}

a {
  text-decoration: none;
  color: inherit;
}

input, select, textarea {
  width: 100%;
  height: 40px;
  padding: 12px;
  margin-bottom: 16px;
}

textarea {
  max-width: 100%;
  min-width: 100%;
  height: 100px;
  min-height: 100px;
  max-height: 200px;
}

h2{
  color: #eae7ee;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
}

h3 {
  color: #4C484D;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

header {
  min-height: 64px;
  padding: 12px 24px;
  background-color: #702FC2;
  position: sticky;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  top: 0;

  .logo {
    width: 120px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #FFF;
  }

  .menu {
    width: 30px;
    height: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    z-index: 9999;
    background: none;
    border: none;

    @media (min-width: 960px) {
      display: none;
    }

    &.active {
      position: fixed;
      top: 15px;
      left: 16px;
    }

    span {
      width: 30px;
      height: 4px;
      position: absolute;
      border-radius: 4px;
      background-color: #FFF;
      transition: 0.5s;

      &:nth-child(2) {
        width: 23px;
        left: 0;
        transform: translateY(-10px);
      }

      &:nth-child(3) {
        width: 15px;
        left: 0;
        transform: translateY(10px);
      }
    }

    &.active span {
      background-color: #702FC2;

      &:nth-child(1) {
        transform: translateX(60px);
      }

      &:nth-child(2) {
        width: 30px;
        transform: translateX(0) rotate(45deg);
        transition-delay: 0.2s;
      }

      &:nth-child(3) {
        width: 30px;
        transform: translateX(0) rotate(-45deg);
        transition-delay: 0.4s;
      }
    }
  }

  nav {
    width: 350px;
    max-width: 100%;
    height: 100vh;
    margin: 0;
    position: fixed;
    top: 0;
    left: -100%;
    padding: 72px 16px 16px 16px;
    flex: 1;
    background-color: #FFF;
    transition: left 0.4s ease;
    z-index: 999;

    &.active {
      left: 0;
      box-shadow: 0 0 0 200vh rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 960px) {
      width: auto;
      height: auto;
      background-color: transparent;
      position: initial;
      display: flex;
      justify-content: space-between;
      padding: 0;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;

      @media (min-width: 960px) {
        flex-direction: row;
        align-items: center;
        justify-content: end;
        gap: 24px;
      }

      li {
        list-style: none;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 500;
        color: #702FC2;
        transition: color 0.2s ease;

        &:hover {
          color: #702FC2;
        }

        @media (min-width: 960px) {
          text-transform: initial;
          color: #FFF;
        }
      }
    }

    button {
      width: 100%;
      padding: 8px;
      margin-top: 24px;
      border-radius: 4px;
      border: 1px solid #702FC2;
      font-size: 16px;
      font-weight: 500;
      color: #702FC2;
      transition: background-color 0.2s ease, color 0.2s ease;

      &:hover {
        background-color: #5A1CAE;
        color: #FFF;
      }

      @media (min-width: 960px) {
        width: 150px;
        margin: 0 0 0 24px;
        background-color: #FFF;
      }
    }
  }
}

.section {
  padding: 40px 20px;
  text-align: center;

  .title {
    color: #702FC2;
  }

  .subtitle {
    text-align: center;
  }

  .content {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    flex-direction: column;

    img {
      display: block;
      margin-inline: auto;
    }

    p {
      text-align: center;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
    }
  }
  
  .cta {
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

  &.purple {
    background-color: #702FC2;

    .title, .content p {
      color: #FFF;
    }

    .content p {
      font-weight: 500;
    }
    
    .cta {
      background-color: #FFF;
      color: #702FC2;
    }
  }
}
</style>
