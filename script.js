const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const screens = document.querySelectorAll(".screen");

const terminalText = document.getElementById("terminalText");
const historyText = document.getElementById("historyText");
const futureText = document.getElementById("futureText");

const photo = document.getElementById("photo");
const photoCaption = document.getElementById("photoCaption");

const resultButton = document.getElementById("resultButton");


function showScreen(id){

    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}


function typeText(element,text,speed=40){

    return new Promise(resolve=>{

        element.innerHTML="";

        let i=0;

        let interval=setInterval(()=>{

            element.innerHTML += text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(interval);

                resolve();

            }

        },speed);

    });

}


function wait(time){

    return new Promise(resolve=>{
        setTimeout(resolve,time);
    });

}



// INÍCIO

startButton.addEventListener("click",async()=>{


    showScreen("screen-auth");


    const terminalLines=[

        "> SYSTEM ONLINE",

        "> Iniciando recuperação de arquivo...",

        "> Arquivo encontrado: RELACIONAMENTO_2025_2026",

        "> Usuário identificado: ISABELA ❤️",

        "> Primeira conexão localizada: 02/07/2025",

        "> Início oficial confirmado: 10/08/2025",

        "> Memórias encontradas...",

        "> Acesso concedido."

    ];


    terminalText.innerHTML="";


    for(let line of terminalLines){

        await typeText(
            terminalText,
            line,
            35
        );

        await wait(700);

        terminalText.innerHTML += "<br>";

    }


    await wait(1200);


    showScreen("screen-history");


    const history=[

        "Algumas histórias começam sem a gente imaginar onde vão chegar...",

        "Um encontro que parecia simples acabou se tornando uma das melhores coisas da minha vida.",

        "Vieram as viagens, as risadas, as brincadeiras e aqueles momentos que só nós dois entendemos.",

        "Cada memória foi criando uma história que eu quero continuar escrevendo.",

        "Mas antes de falar do futuro... vamos lembrar de onde tudo começou."

    ];


    for(let frase of history){

        await typeText(historyText,frase,45);

        await wait(1800);

    }


    showGallery();


});





// GALERIA

const photos=[

{
src:"foto1.jpg",
text:"Essa foi uma das primeiras vezes que saímos juntos… jamais imaginaria onde essa história iria chegar."
},

{
src:"foto2.jpg",
text:"Nossa primeira viagem juntos. Nossa primeira cabana. Um dos primeiros momentos que percebi que queria viver muitas histórias contigo."
},

{
src:"foto3.jpg",
text:"Em um dos nossos lugares favoritos… curtindo um UARADEI na praia 🌊"
},

{
src:"foto4.jpg",
text:"Lembro que nesse dia eu falava que não abria mão de morar no Campeche kkkkk… olha onde a vida foi parar."
},

{
src:"foto5.jpg",
text:"Aqui a gente já tinha começado a avacalhar nas fotos 😂"
},

{
src:"foto6.jpg",
text:"Mais um pedacinho da nossa primeira viagem… daqueles momentos simples que ficaram guardados."
},

{
src:"foto7.jpg",
text:"Essa é uma das minhas fotos preferidas ❤️"
},

{
src:"foto8.jpg",
text:"Pobre gatinhooooo 😂"
},

{
src:"foto9.jpg",
text:"Me larguem, seus imprestáveis, e me deem comida!!! 🐱"
}

];




async function showGallery(){

    showScreen("screen-gallery");


    for(let item of photos){

        photo.style.display="none";

        photoCaption.innerHTML="";


        photo.src=item.src;


        await new Promise(resolve=>{

            photo.onload=()=>{

                photo.style.display="block";

                resolve();

            };

        });


        await wait(500);


        await typeText(photoCaption,item.text,45);


        await wait(4000);

    }


    showMosaic();

}






async function showMosaic(){

    showScreen("screen-mosaic");


    const grid = document.getElementById("mosaicGrid");

    grid.innerHTML="";


    const mosaicPhotos=[

        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg",
        "foto6.jpg",
        "foto7.jpg",
        "foto8.jpg",
        "foto9.jpg"

    ];


    mosaicPhotos.forEach(img=>{


        const image=document.createElement("img");

        image.src=img;

        grid.appendChild(image);


    });


}





// BOTÃO DO MOSAICO

resultButton.addEventListener("click",async()=>{

continueButton.style.display = "none";
continueButton.style.opacity = "0";
continueButton.style.pointerEvents = "none";    

    showScreen("screen-future");


    const future=[

        "MEMÓRIAS RECUPERADAS",

        "",

        "9 arquivos encontrados.",

        "História preservada ❤️",

        "",

        "Mas existe um último arquivo..."

    ];


    futureText.innerHTML="";


    for(let line of future){

        await typeText(futureText,line,45);

        await wait(1200);

        futureText.innerHTML += "<br>";

    }


    await wait(1500);

continueButton.style.display="block";
continueButton.style.opacity="0";

setTimeout(()=>{
    continueButton.style.transition="opacity 1.5s";
    continueButton.style.opacity="1";
    continueButton.style.pointerEvents="auto";
},100);


});





// ÚLTIMO ARQUIVO

let confirmationStage = false;

continueButton.addEventListener("click",async()=>{

    // PRIMEIRO CLIQUE:
    // Concluir autenticação final

    if(!confirmationStage){

        confirmationStage = true;

        // Esconde o botão imediatamente
        continueButton.style.display = "none";
        continueButton.style.opacity = "0";
        continueButton.style.pointerEvents = "none";


        showScreen("screen-future");


        const finalFile=[

            "ARQUIVO: FUTURO.DAT",

            "",

            "Data de criação: 08/08/2026",

            "Tamanho: infinito",

            "",

            "Conteúdo aguardando confirmação..."

        ];


        futureText.innerHTML="";


        for(let line of finalFile){

            await typeText(futureText,line,45);

            await wait(1200);

            futureText.innerHTML += "<br>";

        }


        await wait(1500);


        // Agora o botão volta como CONFIRMAÇÃO
        continueButton.innerText = "CONFIRMAÇÃO";

        continueButton.style.display = "block";
        continueButton.style.opacity = "0";

        setTimeout(()=>{

            continueButton.style.transition = "opacity 1.5s";
            continueButton.style.opacity = "1";
            continueButton.style.pointerEvents = "auto";

        },100);


        return;

    }


    // SEGUNDO CLIQUE:
    // CONFIRMAÇÃO

    continueButton.style.display = "none";
    continueButton.style.pointerEvents = "none";


    showScreen("screen-final");


    const title=document.querySelector(".question1");
    const question=document.querySelector(".question2");


    title.innerHTML="Isabela...";

    question.innerHTML="Quer casar comigo? ❤️";


    title.style.opacity="0";

    question.style.opacity="0";


    await wait(1000);


    title.style.transition="opacity 2s";

    title.style.opacity="1";


    await wait(2500);


    question.style.transition="opacity 2s";

    question.style.opacity="1";

});