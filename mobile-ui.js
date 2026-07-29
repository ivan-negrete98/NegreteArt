/* ==========================================================
   mobile-ui.js
   Paneles móviles
========================================================== */

function toggleLeftPanel(){

    const panel = document.getElementById("leftPanel");
    const overlay = document.getElementById("overlay");

    if(panel){
        panel.classList.toggle("open");
    }

    if(overlay){
        overlay.classList.toggle("open");
    }

}

function toggleRightPanel(){

    const panel = document.getElementById("rightPanel");
    const overlay = document.getElementById("overlay");

    if(panel){
        panel.classList.toggle("open");
    }

    if(overlay){
        overlay.classList.toggle("open");
    }

}

function closePanels(){

    document.getElementById("leftPanel")?.classList.remove("open");
    document.getElementById("rightPanel")?.classList.remove("open");
    document.getElementById("overlay")?.classList.remove("open");

}

function registerPanelButtons(){

    const left = document.getElementById("btnLeftPanel");
    const right = document.getElementById("btnRightPanel");

    if(left){
        left.onclick = function(e){
            e.stopPropagation();
            toggleLeftPanel();
        };
    }

    if(right){
        right.onclick = function(e){
            e.stopPropagation();
            toggleRightPanel();
        };
    }

}

function registerResponsiveMenu(){

    window.addEventListener("resize", function(){

        if(window.innerWidth > 900){
            closePanels();
        }

    });

}

function registerOutsideClick(){

    document.addEventListener("click", function(e){

        const leftPanel = document.getElementById("leftPanel");
        const rightPanel = document.getElementById("rightPanel");

        if(leftPanel?.contains(e.target)) return;
        if(rightPanel?.contains(e.target)) return;

        closePanels();

    });

}

function registerOverlay(){

    const overlay = document.getElementById("overlay");

    if(overlay){

        overlay.onclick = function(){

            closePanels();

        };

    }

}

function initializeUI(){

    registerPanelButtons();

    registerResponsiveMenu();

    registerOutsideClick();

    registerOverlay();

}