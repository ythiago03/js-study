fetch('https://api.github.com/users/ythiago03')//recebe uma url como argumento e 'busca' ela e retorna uma promise
.then(response => response.json())
.then(data => fetch(data.repos_url))
.then(res => res.json())
.then(d => console.log(d))
.catch(err => console.log(err))




