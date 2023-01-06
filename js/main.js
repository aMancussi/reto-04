
/*--------------------PÁGINAS--------------------*/
let sections = document.querySelectorAll('.section');
let home = document.querySelector('.home');
let form = document.querySelector('#form')
let resultados = document.querySelector('.resultado')
let carrousel = document.querySelector('#carrousel')


/*--------------------BOTONES--------------------*/

let btncerrar = document.querySelector('.btn-cerrar')
let verResultado = document.querySelector('#btn-resultado')
let luchar = document.querySelector('.btn-reiniciar')
let guardar = document.querySelector('.btn-guardar')
let salir = document.querySelector('.btn-salir')

/*----------------------------------------*/

let cardsYu = document.querySelector('.carousel-inner')



/*--------------------DATOS ALMACENADOS--------------------*/
let player1 = ''
let player2 = ''
let match = false
let tempCards = []
let todasLasPartidas = []
let partidasPos = 0
let guardada = false
let active = ''
let suma = 0


let partidasGuardadas = []

let nombreP = document.querySelector('#nombreP')


/*--------------------INICIO DE JUEGO--------------------*/


const iniciar = () => {

    let newCards = []

    
    while (newCards.length < 6) {
        random = Math.floor(Math.random() * card.length)
        if(newCards.indexOf(card[random]) == -1) {
            newCards.push(card[random])
        }
    }

     
    
     newCards.forEach((carta, index) => {

        if (index == 0) active = 'active'
        else active = ''

        

        cardsYu.innerHTML += 
        `
        <div class="carousel-item ${active} card-${index}" id="card${index + 1}" data-number="${index + 1}">
            <img src="${carta.imagen}" class="d-block" />
        </div>
        `

        // suma = suma + carta.numero

        suma = suma + carta.numero

        console.log(suma)


        if (suma % 2 === 0) {
          match = true
        } else {
          match = false
        }



    /*--------------------CARROUSEL SLIDER--------------------*/
        
        nombreP.innerHTML = `<h1>1/3 de ${player1}</h1>`


        carrousel.addEventListener('slide.bs.carousel', function (event) {

            let card = event.relatedTarget.getAttribute('data-number')
            if (card < 4) {
              nombreP.innerHTML = `<h1>${card}/3 de ${player1}</h1>`
            }
            if (card > 3 && card <= 6) {

              nombreP.innerHTML = `<h1>${card - 3}/3 de ${player2}</h1>`
            }

        })
        
        tempCards = newCards

    })
    
    

    localStorage.setItem('newCards', JSON.stringify(newCards))
    console.log(JSON.parse(localStorage.getItem('newCards')))

    

    show('carrousel')
}



/*--------------------MOSTRAR PÁGINAS--------------------*/

const show = (page) => {
    sections.forEach((item) => {
        if (item.id === page) {
            item.classList.remove('display-none')
        } else{
            item.classList.add('display-none')
        }
    })
    
    if (page === 'animacion') {
        let time = setTimeout(() => iniciar(), 3000) 
    }
}


/*--------------------PÁGINA RESULTADO--------------------*/

let cartasP1 = document.querySelector('#cartasP1')
let cartasP1titulo = document.querySelector('#cartasP1titulo')
let cartasP2 = document.querySelector('#cartasP2')
let cartasP2titulo = document.querySelector('#cartasP2titulo')

const verResultados = () => {
    resultados.classList.remove('display-none')
    carrousel.classList.add('display-none')

    cartasP1titulo.innerHTML = `Cartas de ${player1}`
    cartasP2titulo.innerHTML = `Cartas de ${player2}`

    tempCards.forEach((carta, index) => {
        if (index < 3) {
            cartasP1.innerHTML += `<div class="col">
          <div class="card h-90">
            <img src=${carta.imagen} class="card-img" alt=${carta.nombre}>
        </div>`
          }
          else {
            cartasP2.innerHTML += `<div class="col">
          <div class="card h-90">
            <img src=${carta.imagen} class="card-img" alt=${carta.nombre}>
        </div>`
          }
    })

}


/*--------------------BOTÓN ENVIAR FORMULARIO--------------------*/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    player1 = e.target.player1.value
    player2 = e.target.player2.value

    if (player1 && player2) {
        show('animacion')
        form.reset()
    }
})


/*--------------------OTROS BOTONES--------------------*/

verResultado.addEventListener('click', () => {
    verResultados()
    // show('resultado')
})

luchar.addEventListener('click', () => {
    show('home')
})


guardar.addEventListener('click', () => {
    show('home')
})

salir.addEventListener('click', () => {
    show('home')
})



// let = pendiente(slider, bootstrap)


