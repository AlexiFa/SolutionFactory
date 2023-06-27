import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CDossier from '../views/courtier/CDossier.vue'
import ClientForm from '../views/user/ClientForm.vue'
import CDashboard from '../views/courtier/CDashboard.vue'
import ManageAccount from '../components/ManageAccount.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/CDossier',
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
    path: '/ManageAccount',
    name: 'ManageAccount',
    component: ManageAccount
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)){
//     //Authentification check
//     const token = localStorage.getItem('token')

//     if (token) {
//       return next()
//     }
//     return next('/login')
//   }

//   next()
// })

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const admin = store.state.CurrentUser.admin;
//   if (requiresAuth && !admin) {
//     next("/error/401");
//   } else if (requiresAuth && admin) {
//     next();
//   } else {
//     next();
//   }
// });

export default router
