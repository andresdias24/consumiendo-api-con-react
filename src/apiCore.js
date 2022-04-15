import { API } from '../src/config';

export const getVideogames = async () => {
  try {
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    headers.append('GET', 'POST', 'OPTIONS');


    const response = await fetch(`${API}/addTasks/list`, {
        mode: 'cors',
        method: 'GET',
        headers: headers
    })

    return await response.json();
    } catch (err) {
        return console.log(err);
    }
}

export const read = (videogameId) => {
  return fetch(`${API}/addTasks/${videogameId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

// export const signin = user => {
//   return fetch(`${API}/auth/signin`, {
//     method: "POST",
//     headers: {
//       Accept: 'application/json',
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user) // user: 
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => {
//       console.log(err);
//     })
// };

// export const signup = user => {
//   return fetch(`${API}/auth/signup`, { 
//     method: "POST",
//     headers: {
//       Accept: 'application/json',
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => {
//       console.log(err);
//     })
// };

// export const authenticate = (data, next) => {
//   if(typeof window !== 'undefined') {
//     localStorage.setItem('jwt', JSON.stringify(data));
//     next();
//   }
// }

// export const signout = (next) => {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem('jwt');
//     next();
//     return fetch(`${API}/auth/signout`, {
//       method: 'GET',
//     })
//       .then(response => {
//           console.log('signout',response);
//       })
//       .catch( err => console.log(err));
//   }
// }

// export const isAuthenticated = () => {
//   if(typeof window == 'undefined') {
//     return false;
//   }
//   if (localStorage.getItem('jwt')) {
//     return JSON.parse(localStorage.getItem('jwt'));
//     // return localStorage.getItem('jwt')
//   }
//     return false;
// }
//  add this to route later
// export const createCategory = (userId, token, category) => {
//   return fetch(`${API}/category/create/${userId}`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify(category)
//   })
//     .then(response => {
//       return response.json()
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// export const getCategories = () => {
//   return fetch(`${API}/category/categories`, {
//     method: 'GET'
//   })
//     .then(response => {
//       return response.json()
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
// // ${userId}
// export const createVideogame = (userId, token, videogame) => {
//   return fetch(`${API}/videogame/create/`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       Authorization: `Bearer ${token}`
//     },
//     body: videogame
//   })
//     .then(response => {
//       return response.json()
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }