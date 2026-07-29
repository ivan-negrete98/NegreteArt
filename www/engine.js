/* ==========================================================
   engine.js
========================================================== */

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    antialias: true
});

/* Variables globales */

let scene;
let camera;
let hemiLight;
let sunLight;
let shadowGenerator;
let grid;
let gizmoManager;

let selectedMesh = null;


const sceneObjects = [];

/* Iniciar */

scene = createScene();

engine.runRenderLoop(() => {

    scene.render();

    updateInspector();

});

window.addEventListener("resize", () => {

    engine.resize();

});



if("serviceWorker" in navigator){

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js")

        .then(() => {

            console.log("Service Worker registrado");

        })

        .catch(err => {

            console.error(err);

        });

    });

}