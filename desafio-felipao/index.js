let xpHeroi = -100;
let rankDoHeroi;

const nomeHeroi = "Seu nome aqui";

switch (true) {
  case xpHeroi >= 0 && xpHeroi <= 1000:
    rankDoHeroi = "Ferro";
    break;

  case xpHeroi >= 1001 && xpHeroi <= 2000:
    rankDoHeroi = "Bronze";
    break;

  case xpHeroi >= 2001 && xpHeroi <= 5000:
    rankDoHeroi = "Prata";
    break;

  case xpHeroi >= 5001 && xpHeroi <= 7000:
    rankDoHeroi = "Ouro";
    break;

  case xpHeroi >= 7001 && xpHeroi <= 8000:
    rankDoHeroi = "Platina";
    break;

  case xpHeroi >= 8001 && xpHeroi <= 9000:
    rankDoHeroi = "Ascendente";
    break;

  case xpHeroi >= 9001 && xpHeroi <= 10000:
    rankDoHeroi = "Imortal";
    break;

  case xpHeroi >= 10001:
    rankDoHeroi = "Radiante";
    break;

  default:
    rankDoHeroi = "Indefinido";
    break;
}

console.log("O Herói " + nomeHeroi + " está no rank " + rankDoHeroi);
