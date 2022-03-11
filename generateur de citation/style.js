let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"La vie est un mystère qu\'il faut vivre, et non un problème à résoudre".  -Gandhi ',
    '"La vie, c\'est comme une bicyclette, il faut avancer pour ne pas perdre l\'équilibre".  -  Albert Einstein ',
    '"Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions".  -   Confucius',
    ' "Offrir l\'amitié à qui veut l\'amour, c\'est donner du pain à qui meurt de soif"  - ',
    ' " Les seuls beaux yeux sont ceux qui vous regardent avec tendresse" - Coco Chanel ',
    ' "S\'aimer soi-même est le début d\'une histoire d\'amour qui durera toute une vie". -   Oscar Wilde ',
]
btn.addEventListener('click', function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})