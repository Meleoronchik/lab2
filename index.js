let div = document.createElement('ol');
let vis =document.createElement('li')

let textNode = document.createTextNode(' Как остановить драку слепых? Крикнуть: я ставлю на того с ножом');
document.body.append(div);
div.append(vis);
vis.append(textNode)
let giv = document.createElement('li');
let textBode = document.createTextNode(' Перестаньте злиться на автозамену. Представляйте себе, что внутри телефона сидит маленький эльф, который очень старается быть полезным, но на самом деле он просто немного пьян.  ');
div.append(giv);
giv.append(textBode)
let vpn = document.createElement('li')
let textdode = document.createTextNode('Что не так с рестораном на луне?    Блюда изысканные, вот только нет атмосферы!');
div.append(vpn)
vpn.append(textdode)

vis.classList.add('goose');
let goose = document.querySelector('.goose');
goose.style.color = "#1cac78";
goose.style.margin = "50px";


giv.classList.add('boose');
let boose = document.querySelector('.boose');
boose.style.color = "#1c6b72";
boose.style.margin = "50px"

vpn.classList.add('noose');
let noose = document.querySelector('.noose');
noose.style.color = "#79443b"
noose.style.margin = "50px"