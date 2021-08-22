const marvel = {
    render:()=>{
        
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=810793b225664c9cf50763ad577e1ede&hash=9b6371cb0c0349988964f9ea57627f71';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
          .then(res => res.json())
          .then((json) => {
              for(const hero of json.data.results){
                  let urlHero = hero.urls[0].url;
                  contentHTML+= `
                  <div class = "col-md-4">
                    <a href = "${urlHero}" targe = "_blank">
                        <img src = "${hero.thumbnail.path}.${hero.thumbnail.extension}" alt = "${hero.name}" class = "img-thumbnail">
                    </a>
                    <h3 class = "title">${hero.name}</h3>
                  </div>`;
              }

              container.innerHTML = contentHTML;
            })
    }
};

marvel.render();