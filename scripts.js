const owce = [
{
    name : "owca2",
    color : "red" ,
    koza : 7,
},
{
    name : "owca3",
    color : "white" ,
    koza : 6,
},
{
    name : "owca4",
    color : "black" ,
    koza : 9,
},
{
    name : "owca5",
    color : "red" ,
    koza : 8,
},
{
    name : "owca6",
    color : "green" ,
    koza : 3,
},
]


const reprezentacjaOwiec = owce.map( owca =>`
<div class="owca">
<h3>${owca.name}</h3>
<h3>${owca.color}</h3>
<h3>${owca.koza}</h3>
</div>
`)

const tekstDoWstawienia = reprezentacjaOwiec.join("");

const miejsceNaTekst = document.querySelector("#miejsceNaOwce")

miejsceNaTekst.innerHTML = tekstDoWstawienia;
