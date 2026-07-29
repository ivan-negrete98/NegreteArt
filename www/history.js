/* ==========================================================
   NEGRETEART STUDIO
   HISTORY MANAGER v1.0
========================================================== */

const historyManager = {

    undoStack: [],

    redoStack: [],

    maxSteps: 100

};

/* ==========================================
   GUARDAR ESTADO
========================================== */

function saveHistory(){

    if(!selectedMesh) return;

    historyManager.undoStack.push({

        mesh: selectedMesh,

        position: selectedMesh.position.clone(),

        rotation: selectedMesh.rotation.clone(),

        scaling: selectedMesh.scaling.clone()

    });

    if(historyManager.undoStack.length >

       historyManager.maxSteps){

        historyManager.undoStack.shift();

    }

    historyManager.redoStack = [];

}

/* ==========================================
   DESHACER
========================================== */

function undo(){

    if(historyManager.undoStack.length === 0){

        return;

    }

    const state = historyManager.undoStack.pop();

    historyManager.redoStack.push({

        mesh: state.mesh,

        position: state.mesh.position.clone(),

        rotation: state.mesh.rotation.clone(),

        scaling: state.mesh.scaling.clone()

    });

    state.mesh.position.copyFrom(state.position);

    state.mesh.rotation.copyFrom(state.rotation);

    state.mesh.scaling.copyFrom(state.scaling);

}

/* ==========================================
   REHACER
========================================== */

function redo(){

    if(historyManager.redoStack.length === 0){

        return;

    }

    const state = historyManager.redoStack.pop();

    historyManager.undoStack.push({

        mesh: state.mesh,

        position: state.mesh.position.clone(),

        rotation: state.mesh.rotation.clone(),

        scaling: state.mesh.scaling.clone()

    });

    state.mesh.position.copyFrom(state.position);

    state.mesh.rotation.copyFrom(state.rotation);

    state.mesh.scaling.copyFrom(state.scaling);

}