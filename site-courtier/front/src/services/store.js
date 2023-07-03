import { ref } from 'vue';

export const isLoggedIn = ref(!!localStorage.getItem('token'));


// export const setLoggedIn = (value, user_id) => {
//     isLoggedIn.value = value;
//     localStorage.setItem('token', value ? 'true' : '');
//     localStorage.setItem('user_id', user_id || '');
    
// };

export const setLoggedIn = (value, user_id) => {
  isLoggedIn.value = value;
  localStorage.setItem('token', value || '');
  localStorage.setItem('user_id', user_id || '');
  
};

export const logout = async () => {
  const res = await fetch('http://localhost:3000/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      session_token: localStorage.getItem('token')
    })
  }).then(res => res.json())

  if (res.success || res.clearToken) {
    setLoggedIn(false);
    return true;
  } else {
    alert(res.message);
    return false;
  }
};

export const getUserInfo = async () => {
  const user_id = localStorage.getItem('user_id')

  if(!user_id){return}

  const res = await fetch(`http://localhost:3000/api/users/userinfo?user_id=${user_id}`, {

    
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
  if (res.success) {
    return res
  }
}

export const userInfo = ref(null);
export const fetchUserInfo = async () => {
  const res = await getUserInfo()
  if (res && res.user) {
    userInfo.value = res.user
  } else {
    console.log('User information not available');
  }
}


export const validateToken = async () => {
  const res = await fetch('http://localhost:3000/api/auth/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      session_token: localStorage.getItem('token')
    })
  }).then(res => res.json());
  
  if (!res.success) {
    setLoggedIn(false, '');
  }
};

// Llamar a esta función cuando inicie la aplicación
validateToken();



