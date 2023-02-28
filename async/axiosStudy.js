

const url = 'https://api.github.com/users/ythiago03'

const getUser = (url) => {
    axios.get(url)
        .then(res => console.log(res))
}

getUser(url)