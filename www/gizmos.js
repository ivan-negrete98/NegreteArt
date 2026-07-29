/* ==========================================================
   gizmos.js
   Herramientas de transformación
========================================================== */

let currentTool = "move";

function createGizmos(scene){

    gizmoManager = new BABYLON.GizmoManager(scene);

    gizmoManager.clearGizmoOnEmptyPointerEvent = false;

    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = false;
    gizmoManager.scaleGizmoEnabled = false;
    gizmoManager.boundingBoxGizmoEnabled = false;

}


function setTransformTool(tool){

    currentTool = tool;

    gizmoManager.positionGizmoEnabled = false;
    gizmoManager.rotationGizmoEnabled = false;
    gizmoManager.scaleGizmoEnabled = false;

    switch(tool){

        case "move":
            gizmoManager.positionGizmoEnabled = true;
        break;

        case "rotate":
            gizmoManager.rotationGizmoEnabled = true;
        break;

        case "scale":
            gizmoManager.scaleGizmoEnabled = true;
        break;

    }

    if(selectedMesh){

        gizmoManager.attachToMesh(selectedMesh);

    }

}



function attachSelected(){

    if(selectedMesh){

        gizmoManager.attachToMesh(selectedMesh);

    }

}


function detachSelected(){

    gizmoManager.attachToMesh(null);

}


let snapEnabled = false;
let snapValue = 1;

function toggleSnap(){

    snapEnabled = !snapEnabled;

    gizmoManager.gizmos.positionGizmo.snapDistance =
        snapEnabled ? snapValue : 0;

    gizmoManager.gizmos.rotationGizmo.snapDistance =
        snapEnabled ? BABYLON.Tools.ToRadians(15) : 0;

    gizmoManager.gizmos.scaleGizmo.snapDistance =
        snapEnabled ? 0.25 : 0;

}



function setSnap(value){

    snapValue = value;

    if(snapEnabled){

        gizmoManager.gizmos.positionGizmo.snapDistance =
            value;

    }

}




function selectMesh(mesh){

    if(!mesh) return;

    selectedMesh = mesh;

    attachSelected();

    updateInspector();

    updateStats();

    refreshSceneExplorer();

}



function registerTransformButtons(){

    document.getElementById("toolMove").onclick = () => {

        setTransformTool("move");

    };

    document.getElementById("toolRotate").onclick = () => {

        setTransformTool("rotate");

    };

    document.getElementById("toolScale").onclick = () => {

        setTransformTool("scale");

    };

}




