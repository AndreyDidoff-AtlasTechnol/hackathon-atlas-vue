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
import JobVacancyList from "@/pages/JobVacancyList.vue"
import JobVacancySearch from "@/pages/JobVacancySearch.vue"
import JobVacancyRegistration from "@/pages/JobVacancyRegistration.vue"
import Mentoring from "@/pages/Mentoring.vue"

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
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: Roadmap,
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
  },
  {
    path: "/trainings-corp",
    name: "trainings-corp",
    component: TrainingsCorp,
  },
  {
    path: "/job-vacancy-list",
    name: "job-vacancy-list",
    component: JobVacancyList,
  },
  {
    path: "/job-vacancy-search",
    name: "job-vacancy-search",
    component: JobVacancySearch,
  },
  {
    path: '/job-vacancy-registration',
    name: 'job-vacancy-registration',
    component: JobVacancyRegistration,
  },
  {
    path: '/mentoring',
    name: 'mentoring',
    component: Mentoring,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router