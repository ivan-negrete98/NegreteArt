/* ==========================================================
   selection.js
========================================================== */

function selectMesh(mesh){

    if(!mesh) return;

    selectedMesh = mesh;

    if(gizmoManager){
        gizmoManager.attachToMesh(mesh);
    }

    updateInspector();
    updateStats();

    if(typeof refreshSceneExplorer === "function"){
        refreshSceneExplorer();
    }

}

function enablePicking(scene){

    scene.onPointerDown = function(evt, pick){

        if(!pick.hit) return;

        if(pick.pickedMesh === grid) return;

        selectMesh(pick.pickedMesh);

    };

}