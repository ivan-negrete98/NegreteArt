/* ==========================================================
   NEGRETEART SCULPT ENGINE v1.0
========================================================== */

let sculptEnabled = false;

let sculptBrush = "inflate";

let brushRadius = 0.8;

let brushStrength = 0.15;

let sculptCursor = null;

/* ==========================================
   INICIAR
========================================== */

function initializeSculpt(){

    createBrushCursor();

    registerSculptEvents();

}

/* ==========================================
   ACTIVAR
========================================== */

function enableSculpt(){

    sculptEnabled = true;

    if(gizmoManager){

        gizmoManager.attachToMesh(null);

    }

}

/* ==========================================
   DESACTIVAR
========================================== */

function disableSculpt(){

    sculptEnabled = false;

    sculptCursor.isVisible = false;

    if(selectedMesh){

        gizmoManager.attachToMesh(selectedMesh);

    }

}

/* ==========================================
   PINCEL
========================================== */

function setBrush(name){

    sculptBrush = name;

}

function setBrushRadius(value){

    brushRadius = value;

}

function setBrushStrength(value){

    brushStrength = value;

}



/* ==========================================================
   SCULPT ENGINE
   PARTE 2
   CURSOR DEL PINCEL
========================================================== */

function createBrushCursor(){

    sculptCursor = BABYLON.MeshBuilder.CreateDisc(

        "BrushCursor",

        {

            radius: brushRadius,

            tessellation: 64

        },

        scene

    );

    sculptCursor.rotation.x = Math.PI / 2;

    sculptCursor.isPickable = false;

    sculptCursor.isVisible = false;

    const mat = new BABYLON.StandardMaterial(

        "BrushCursorMaterial",

        scene

    );

    mat.diffuseColor = new BABYLON.Color3(

        0,

        0.75,

        1

    );

    mat.emissiveColor = new BABYLON.Color3(

        0,

        0.75,

        1

    );

    mat.alpha = 0.35;

    mat.backFaceCulling = false;

    sculptCursor.material = mat;

}

/* ==========================================
   ACTUALIZAR CURSOR
========================================== */

function updateBrushCursor(pick){

    if(!pick.hit){

        sculptCursor.isVisible = false;

        return;

    }

    sculptCursor.isVisible = sculptEnabled;

    sculptCursor.position.copyFrom(

        pick.pickedPoint

    );

    sculptCursor.scaling.set(

        brushRadius,

        brushRadius,

        brushRadius

    );

}



/* ==========================================
   EVENTOS DEL CURSOR
========================================== */

function registerSculptEvents(){

    scene.onPointerObservable.add(function(){

        const pick = scene.pick(

            scene.pointerX,

            scene.pointerY

        );

        if(!pick.hit){

            return;

        }

        updateBrushCursor(

            pick

        );

    });

}


