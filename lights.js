/* ==========================================================
   lights.js
   Sistema de iluminación
========================================================== */

function createLights(scene){

    /* ==========================================
       LUZ AMBIENTAL
    ========================================== */

    hemiLight = new BABYLON.HemisphericLight(

        "HemiLight",

        new BABYLON.Vector3(0,1,0),

        scene

    );

    hemiLight.intensity = 0.85;

    hemiLight.diffuse = new BABYLON.Color3(

        1,
        1,
        1

    );

    hemiLight.groundColor = new BABYLON.Color3(

        0.25,
        0.25,
        0.30

    );

    /* ==========================================
       SOL
    ========================================== */

    sunLight = new BABYLON.DirectionalLight(

        "Sun",

        new BABYLON.Vector3(-1,-2,-1),

        scene

    );

    sunLight.position = new BABYLON.Vector3(

        25,
        40,
        25

    );

    sunLight.intensity = 2.0;

    /* ==========================================
       SOMBRAS
    ========================================== */

    shadowGenerator = new BABYLON.ShadowGenerator(

        2048,

        sunLight

    );

    shadowGenerator.useBlurExponentialShadowMap = true;

    shadowGenerator.blurKernel = 32;

    shadowGenerator.bias = 0.0002;

    shadowGenerator.normalBias = 0.02;

}



/* ==========================================
   CAMBIAR INTENSIDAD
========================================== */

function setLightIntensity(value){

    hemiLight.intensity = value;

}

/* ==========================================
   CAMBIAR SOL
========================================== */

function setSunIntensity(value){

    sunLight.intensity = value;

}

/* ==========================================
   MODO NOCHE
========================================== */

function enableNightMode(){

    scene.clearColor = new BABYLON.Color4(

        0.03,
        0.03,
        0.05,
        1

    );

    hemiLight.intensity = 0.20;

    sunLight.intensity = 0.40;

}

/* ==========================================
   MODO DÍA
========================================== */

function enableDayMode(){

    scene.clearColor = new BABYLON.Color4(

        0.10,
        0.10,
        0.12,
        1

    );

    hemiLight.intensity = 0.85;

    sunLight.intensity = 2.0;

}