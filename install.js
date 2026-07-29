/* ==========================================================
   install.js
   Instalación PWA
========================================================== */

let deferredPrompt = null;

const installButton = document.getElementById("btnInstall");

/* Detectar cuando la app puede instalarse */

window.addEventListener("beforeinstallprompt", (event)=>{

    event.preventDefault();

    deferredPrompt = event;

    if(installButton){

        installButton.style.display = "inline-flex";

    }

});

/* Instalar */

if(installButton){

    installButton.onclick = async function(){

        if(!deferredPrompt){

            alert("La aplicación aún no puede instalarse.");

            return;

        }

        deferredPrompt.prompt();

        const result = await deferredPrompt.userChoice;

        if(result.outcome === "accepted"){

            console.log("Aplicación instalada");

        }

        deferredPrompt = null;

        installButton.style.display = "none";

    };

}

/* Si ya está instalada */

window.addEventListener("appinstalled",()=>{

    console.log("NegreteArt Studio instalada.");

    if(installButton){

        installButton.style.display="none";

    }

});