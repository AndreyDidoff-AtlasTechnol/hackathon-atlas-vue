import { createWebHistory, createRouter } from "vue-router"
import Home from "@/pages/Home.vue"
import BadgeDiversificaJobs from "@/pages/BadgeDiversificaJobs.vue"
import HowItWorks from "@/pages/HowItWorks.vue"
import Login from "@/pages/Login.vue"
import Profile from "@/pages/Profile.vue"
import Register from "@/pages/Register.vue"
import Roadmap from "@/pages/Roadmap.vue"
import SuccessCases from "@/pages/SuccessCases.vue"
import Trainings from "@/pages/Trainings.vue"
import TrainingsCorp from "@/pages/TrainingsCorp.vue"
import Vacancies from "@/pages/Vacancies.vue"
import Vacancy from "@/pages/Vacancy.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/badge-diversifica-jobs",
    name: "badge-diversifica-jobs",
    component: BadgeDiversificaJobs,
  },
  {
    path: "/how-it-works",
    name: "how-it-works",
    component: HowItWorks,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    props: { isUserLogged: true }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/Roadmap",
    name: "Roadmap",
    component: Roadmap,
    props: { isUserLogged: true }
  },
  {
    path: "/success-cases",
    name: "success-cases",
    component: SuccessCases,
  },
  {
    path: "/trainings",
    name: "trainings",
    component: Trainings,
    props: { isUserLogged: true }
  },
  {
    path: "/trainings-corp",
    name: "trainings-corp",
    component: TrainingsCorp,
    props: { isCorpLogged: true }
  },
  {
    path: "/vacancies",
    name: "vacancies",
    component: Vacancies,
    props: { isUserLogged: true }
  },
  {
    path: "/vacancy",
    name: "vacancy",
    component: Vacancy,
    props: { isCorpLogged: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router