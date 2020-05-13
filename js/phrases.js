const phrases = [
  "¡Solo quiero tu cosita!",
  "¡Solo quier una noche de pasión bebé :3",
  "Pero si yo te amo :C",
  "Andale, un ratico no mas",
  "Por que eres tan cruel!! :c",
  "Mira ese sexi boton que dice SI",
  "Solo imagina todo lo que podriamos hacer beibi",
  "Pero si te estoy pensando todo el dia!!",
  "Deja de perseguir ese boton, dale al otro :D",
  "Tu corazonsito quiere ;)",
  "Te hare el desayuno a diario, pleaseeee",
  "Hasta se el beso negro xD",
  "Si dices que si me caso :D",
  "Siges persiguiendo ese boton y voy y secuetro a mi futura suegra",
  "¿Y si te doy una casa?",
  "Yo se que me mereces :S",
  "Te regalare un perrito",
  "¿Y si te doy un conejito?",
  "Di que si y veras la magia",
  "5 minutos de novios, ¿Qué dices?",
  "Tu + Yo = AMOR :D",
  "La tengo como te gusta :S",
  "Te llevare al mar",
  "Ni te ezfuerses, el programador tiene todo a mi favor wuajaja",
  "I love you!! ('Te amo' en español :D )",
];
const btnNoo = document.getElementById("btn-no");
const phrasesPara = document.getElementById("phrases-troll");

btnNoo.addEventListener("mouseenter", () => {
  const ramdom = Math.floor(Math.random() * phrases.length);
  phrasesPara.innerHTML = phrases[ramdom];
});
