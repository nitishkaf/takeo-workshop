const btn = document.getElementById("button")
const login = document.getElementById("login")

btn.addEventListener('click', printValue);

printValue()

function printValue() {
  const username = document.getElementById('usernameID').value
  login.innerHTML = username

  console.log(username)
}

// fetch(`https://api.github.com/users/${username}`)
//   .then(res => res.json())
//   .then(data => console.log({
//     // const {name, followers, following, location } = data
//     name: data.name,
//     followers: followers,
//     following: following,
//     location: location
//   }))
//   .catch(err => console.log(`Error: ${err}`))




// async await

// PARALLEL --> ASYNCHRONOUS --> more than one task
// SYNCHRONOUS --> it cannot do more than one task
