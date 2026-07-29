/* ==========================================================
   ui.js
========================================================== */

function registerUI(){

    /* ==========================================
       CREAR PRIMITIVAS
    ========================================== */
const btnNew = document.getElementById("btnNew");

if(btnNew){

    btnNew.onclick = newProject;

}

const btnSave = document.getElementById("btnSave");

if(btnSave){

    btnSave.onclick = saveProject;

}














    const bind = (id, type) => {

        const btn = document.getElementById(id);

        if(btn){

            btn.onclick = () => createPrimitive(type);

        }

    };

    bind("createCube","cube");
    bind("createSphere","sphere");
    bind("createCylinder","cylinder");
    bind("createPlane","plane");
    bind("createCone","cone");
    bind("createTorus","torus");
    bind("createCapsule","capsule");
    bind("createGround","ground");


    /* ==========================================
       MATERIALES
    ========================================== */

    const bindMaterial = (id,type)=>{

        const btn = document.getElementById(id);

        if(btn && typeof applyMaterial==="function"){

            btn.onclick = ()=>applyMaterial(type);

        }

    };

    bindMaterial("matPlastic","plastic");
    bindMaterial("matMetal","metal");
    bindMaterial("matGold","gold");
    bindMaterial("matGlass","glass");
    bindMaterial("matWood","wood");
    bindMaterial("matStone","stone");


    /* ==========================================
       TEXTURAS
    ========================================== */

    const btnTexture =
        document.getElementById("btnTexture");

    const textureInput =
        document.getElementById("textureInput");

    if(btnTexture && textureInput){

        btnTexture.onclick = ()=>{

            textureInput.click();

        };

        textureInput.onchange = function(e){

            if(
                e.target.files.length &&
                typeof loadTexture==="function"
            ){

                loadTexture(e.target.files[0]);

            }

        };

    }


    /* ==========================================
       VISIBILIDAD
    ========================================== */

    const btnVisibility =
        document.getElementById("btnVisibility");

    if(
        btnVisibility &&
        typeof toggleVisibility==="function"
    ){

        btnVisibility.onclick = toggleVisibility;

    }


    /* ==========================================
       BLOQUEAR
    ========================================== */

    const btnLock =
        document.getElementById("btnLock");

    if(
        btnLock &&
        typeof toggleLock==="function"
    ){

        btnLock.onclick = toggleLock;

    }


    /* ==========================================
       CAPAS
    ========================================== */

    const btnNewLayer =
        document.getElementById("btnNewLayer");

    if(
        btnNewLayer &&
        typeof createLayer==="function"
    ){

        btnNewLayer.onclick = createLayer;

    }

    const btnLayerVisible =
        document.getElementById("btnLayerVisible");

    if(
        btnLayerVisible &&
        typeof toggleLayerVisibility==="function"
    ){

        btnLayerVisible.onclick =
            toggleLayerVisibility;

    }

    const btnLayerLock =
        document.getElementById("btnLayerLock");

    if(
        btnLayerLock &&
        typeof toggleLayerLock==="function"
    ){

        btnLayerLock.onclick =
            toggleLayerLock;

    }


    /* ==========================================
       INSPECTOR
    ========================================== */

    if(typeof registerInspectorEvents==="function"){

        registerInspectorEvents();

    }


    /* ==========================================
       PANEL MÓVIL
    ========================================== */

    if(typeof initializeUI==="function"){

        initializeUI();

    }


    /* ==========================================
       CÁMARA
    ========================================== */

    if(typeof registerCameraButtons==="function"){

        registerCameraButtons();

    }


    /* ==========================================
       GIZMOS
    ========================================== */

    if(typeof registerTransformButtons==="function"){

        registerTransformButtons();

    }


    /* ==========================================
       HISTORIAL
    ========================================== */

    if(typeof registerHistoryButtons==="function"){

        registerHistoryButtons();

    }


    /* ==========================================
       DRAG & DROP
    ========================================== */

    if(typeof initializeDragAndDrop==="function"){

        initializeDragAndDrop();

    }

}
