let nomeHeroi = "Superman"
let nivelHeroi = 10030 

while (nivelHeroi < 0){
    let nivelHeroi = Int(prompt("Qual o nivel do heroi?"))
}

if (nivelHeroi <= 1000){
    console.log("O Herói de nome" + nomeHeroi + "está no nível de Ferro")

}
else if (nivelHeroi >= 1001 && nivelHeroi <= 2000){
    console.log("O Herói de nome" + nomeHeroi +  "está no nível de Bronze")
}

else if (nivelHeroi >= 2001 && nivelHeroi <= 5000){
    console.log("O Herói de nome" + nomeHeroi + "está no nível de Prata")
}

else if (nivelHeroi >= 5001 && nivelHeroi <= 7000){
    console.log("O Herói de nome" + nomeHeroi + "está no nível de Ouro")
}

else if (nivelHeroi >= 7001 && nivelHeroi <= 8000){
    console.log("O Herói de nome" + nomeHeroi + "está no nível de Platina")
}

else if (nivelHeroi >= 8001 && nivelHeroi <= 9000){
    console.log("O Herói de nome" + nomeHeroi + "está no nível de Ascendente")
}

else if (nivelHeroi >= 9001 && nivelHeroi <= 10000){
    console.log("O Herói de nome" + nomeHeroi + "está no nível de Imortal")
}




else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante " )
}

