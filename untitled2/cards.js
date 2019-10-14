const cards=[
     'img/tatoo1.png',
     'img/tatoo2.png',
     'img/tatoo3.png',
     'img/tatoo4.png',
      'img/tatoo5.png',
     'img/tatoo6.png',
     'img/tatoo7.png',
     'img/tatoo1.png',
     'img/tatoo2.png',
     'img/tatoo3.png',
     'img/tatoo4.png',
    'img/tatoo5.png',
     'img/tatoo6.png',
     'img/tatoo7.png'
]

let opencard = -1
let oi = 0
let ui = 0
cards.sort(() => Math.random() - 0.5);
let nightcards = (number)=>{
    if(oi<2){
        console.log(ui)
        if (opencard === -1)
            opencard = number
        else {
            setTimeout(function () {
                if (cards[opencard] === cards[number]){
                    oi = 0
                    ui +=1
                }
                else if (cards[opencard] !==cards[number] ){
                    document.getElementById(number.toString()).src = "rounder-black.png"
                    document.getElementById(opencard.toString()).src = "rounder-black.png"
                }
                opencard = -1
                oi = 0
            },400)}
        document.getElementById(number.toString()).src = cards[number]
        oi +=1
        }
    if (ui === 6){
           document.getElementById('14').style.display = 'block'
            document.getElementById('0').style.display = 'none'
            document.getElementById('1').style.display = 'none'
            document.getElementById('2').style.display = 'none'
            document.getElementById('3').style.display = 'none'
            document.getElementById('4').style.display = 'none'
            document.getElementById('5').style.display = 'none'
            document.getElementById('6').style.display = 'none'
            document.getElementById('7').style.display = 'none'
            document.getElementById('8').style.display = 'none'
            document.getElementById('9').style.display = 'none'
            document.getElementById('10').style.display = 'none'
            document.getElementById('11').style.display = 'none'
            document.getElementById('12').style.display = 'none'
            document.getElementById('13').style.display = 'none'
            document.getElementById('15').innerHTML = 'score: 1'
    }
}