const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokemon-choice");
    let pokeName = pokeNameInput.value;
    console.log("Pokemon: " + pokeName);
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            setPokeImage("images/pokemon_not_found.jpg");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        let stats = [];
        if (data) {
            data.stats.forEach(element => {
                setStat(element.stat.name, element.base_stat);
                stats.push(element.base_stat);
                //setStatBar(element.stat.name, element.base_stat);
            });
            bars = document.querySelectorAll(".bar");
            for (let i = 0; i < bars.length; i++){
                bars[i].style.width = `${stats[i] * 3}px`;
            }
            // bars.forEach(bar => {
            //     bar.style.width = `${stats[]}px`;
            // });
            // console.log(bars)

            setStat("main-ability", data.abilities[0].ability.name);
            setStat("base-experience", data.base_experience);
            setStat("height", data.height);


            let pokeImg = data.sprites.front_default;
            setPokeImage(pokeImg);
        }
    });
}

const setPokeImage = (url) => {
    const pokePhoto = document.getElementById("poke-img");
    pokePhoto.src = url;
}

const setStat = (elementId, statValue) => {
    pokeStat = document.getElementById(elementId);
    pokeStat.innerText = `${elementId}: ${statValue}`.toUpperCase();
}

const setStatBar = (elementId, statValue) => {
    console.log(elementId + "-bar");
    pokeStat = document.getElementById(elementId + "-bar")
    console.log(pokeStat)

    pokeStat.style.width = "100px";//`${statValue}px`;
    
}

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }


ready(() => { 
    let pokeFetchButton = document.getElementById("fetch-pokemon");
    pokeFetchButton.addEventListener("click", fetchPokemon);
  });