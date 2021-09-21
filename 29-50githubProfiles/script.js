const APIURL = "https://api.github.com/users/";


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    // console.log(data);
    createUserCard(data);
    getRepos(username)
  } catch(err) {
    // console.log(err);
    if(err.response.status == 404){
        createErrorCard("404 User does not exit.");
    }
    
  }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created');
    
        addReposToCard(data);
      } catch(err) {
        createErrorCard("Problem Fetching Repositories.");

      }

}

function createUserCard(user){
    const cardHTML = `<div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>30 <strong>Repos</strong></li>
      </ul>

        <div id="repos">
    
        </div>

    </div>
  </div>`

  main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0, 10).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })

}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})