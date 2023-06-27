// store.js
import { ref, watchEffect } from 'vue';

// Estado de inicio de sesión
export const isLoggedIn = ref(!!localStorage.getItem('token'));

watchEffect(() => {
  localStorage.setItem('token', isLoggedIn.value);
});