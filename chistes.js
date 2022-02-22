const chisteAPIButton = document.querySelector('#chisteNuevo');
chisteAPIButton.addEventListener('click', mostrarChiste);


async function mostrarChiste() {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url,{ headers: {
                        'Accept': 'application/json'
                            }
                        });
        const json = await response.json();
        console.log('oki');
    } catch (error) {
        console.log(error);
    }
//     const url = 'https://icanhazdadjoke.com/';
//     fetch(url,{
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(json => console.log(json));
}
mostrarChiste()