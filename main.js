let linkS = document.querySelector('img')
let inputSearch = document.querySelector('#inputSearch')
let btnSearchImg = document.querySelector('#btnSearchImg')
let btnRandomImg = document.querySelector('#btnRandomImg')

let request = false;

let API = 'g427Ok2GUeaw2pnpFZVDnNqWOCfSzelc'
let RequestURLRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`


btnRandomImg.addEventListener('click', async () =>{
    linkS.src = await requestRandom()
})


inputSearch.addEventListener("keydown", async (e) => {
    if(e.key === 'Enter')
    {
        linkS.src = await requestSearch()
        inputSearch.value = ''
    }
});

btnSearchImg.addEventListener('click', async () => {
    linkS.src = await requestSearch()
    inputSearch.value = ''
})

const requestSearch = async () =>{
    let RequestURLSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${inputSearch.value}&limit=1&offset=0&rating=g&lang=en`
    let link = '';
    await axios.get(RequestURLSearch)
    .then(res =>{
        link = res['data']['data'][0]['images']['original']['url']
    })
    .catch((err) => {
        link = "https://cdn-icons-png.flaticon.com/512/675/675564.png"
        console.log(err);
    });
    return link;
}

const requestRandom = async () => {
    let link = '';
    await axios.get(RequestURLRandom)
    .then((response) => {
        link = response.data.data.images.downsized.url;
    })
    .catch((err) => {
        link = "https://cdn-icons-png.flaticon.com/512/675/675564.png"
        console.log(err);
    });
    return link;
}



