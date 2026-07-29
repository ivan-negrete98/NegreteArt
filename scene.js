/* ==========================================================
   scene.js
   Crea la escena principal de Babylon
========================================================== */

function createScene(){

    scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color4(
        0.10,
        0.10,
        0.12,
        1
    );

    /* Cámara */
    createCamera(scene);

    /* Luces */
    createLights(scene);

    /* Grid */
    createGrid(scene);

    /* Ejes */
    createAxes(scene);

    /* Gizmos */
    createGizmos(scene);

    /* Cubo inicial */
    createDefaultCube(scene);

    /* Selección */
    enablePicking(scene);

    /* Interfaz */
    registerUI();

    initializeSceneExplorer();

    return scene;
}