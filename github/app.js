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
//     name: data.name,
//     followers: data.followers,
//     following: data.following,
//     location: data.location
//   }))
//   .catch(err => console.log(`Error: ${err}`))
