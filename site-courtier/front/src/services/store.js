import { ref } from 'vue';

export const isLoggedIn = ref(!!localStorage.getItem('token'));


export const setLoggedIn = (value) => {
    isLoggedIn.value = value;
    localStorage.setItem('token', value ? 'true' : '');
};

export const logout = async () => {
  const res = await fetch('http://localhost:3000/logout', {
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

// export const searchUser = async () => {
//   const user = await fetch('http://localhost:3000/searchUser', {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//       email: email.value,

//     })
//   }).then(user => user.json())
//   if (user.success) {
//     localStorage.setItem('currentUser', user.User)


// } else{
//     alert(user.message)
// }
// }




