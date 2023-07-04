import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CDossier from '../views/courtier/CDossier.vue'
import ClientForm from '../views/user/ClientForm.vue'
import CDashboard from '../views/courtier/CDashboard.vue'
import UDashboard from '../views/user/UDashboard.vue'
import ManageAccount from '../components/ManageAccount.vue'
import UDossier from '../views/user/UDossier.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {

    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  {
    path: '/CDossier/:dossierId',
    name: 'CDossier',
    component: CDossier
  },
  {
    path: '/ClientForm',
    name: 'ClientForm',
    component: ClientForm
  },
  {
    path: '/CDashboard',
    name: 'CDashboard',
    component: CDashboard
  },
  {
    path:"/UDossier/:dossierId",
    name:"UDossier",
    component: UDossier
  },
  {
    path: '/UDashboard',
    name: 'UDashboard',
    component: UDashboard
  },
  {
    path: '/ManageAccount',
    name: 'ManageAccount',
    component: ManageAccount
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    //Authentification check
    const token = localStorage.getItem('token')

    if (token) {
      return next()
    }
    return next('/login')
  }

  next()
})



export default router
