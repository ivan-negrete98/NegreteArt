/* ==========================================================
   camera.js
   Cámara y vistas
========================================================== */

function createCamera(scene){

    camera = new BABYLON.ArcRotateCamera(

        "Camera",

        -Math.PI / 2,

        Math.PI / 3,

        12,

        new BABYLON.Vector3(0,1,0),

        scene

    );

    camera.attachControl(canvas, true);

    camera.lowerRadiusLimit = 2;

    camera.upperRadiusLimit = 300;

    camera.wheelDeltaPercentage = 0.01;

    camera.panningSensibility = 80;

    camera.allowUpsideDown = false;

}

/* ==========================================
   POSICIÓN INICIAL
========================================== */

const defaultCameraState = {

    alpha: -Math.PI / 2,

    beta: Math.PI / 3,

    radius: 12,

    target: new BABYLON.Vector3(0,1,0)

};

/* ==========================================
   CAMBIAR VISTA
========================================== */

function setCameraView(view){

    switch(view){

        case "front":

            camera.alpha = -Math.PI/2;
            camera.beta = Math.PI/2;
            break;

        case "back":

            camera.alpha = Math.PI/2;
            camera.beta = Math.PI/2;
            break;

        case "left":

            camera.alpha = Math.PI;
            camera.beta = Math.PI/2;
            break;

        case "right":

            camera.alpha = 0;
            camera.beta = Math.PI/2;
            break;

        case "top":

            camera.beta = 0.15;
            break;

        case "bottom":

            camera.beta = Math.PI - 0.15;
            break;

        case "iso":

            camera.alpha = -Math.PI/4;
            camera.beta = Math.PI/3;
            break;

    }

}

/* ==========================================
   ENFOCAR OBJETO
========================================== */

function focusSelected(){

    if(!selectedMesh) return;

    camera.setTarget(

        selectedMesh.getAbsolutePosition()

    );

}

/* ==========================================
   REINICIAR CÁMARA
========================================== */

function resetCamera(){

    camera.alpha = defaultCameraState.alpha;

    camera.beta = defaultCameraState.beta;

    camera.radius = defaultCameraState.radius;

    camera.setTarget(

        defaultCameraState.target.clone()

    );

}

/* ==========================================
   ENCUADRAR TODA LA ESCENA
========================================== */

function frameScene(){

    if(sceneObjects.length === 0){

        resetCamera();

        return;

    }

    const meshes = sceneObjects.filter(mesh => mesh && !mesh.isDisposed());

    if(meshes.length === 0){

        resetCamera();

        return;

    }

    const min = meshes[0].getBoundingInfo().boundingBox.minimumWorld.clone();
    const max = meshes[0].getBoundingInfo().boundingBox.maximumWorld.clone();

    meshes.forEach(mesh => {

        const box = mesh.getBoundingInfo().boundingBox;

        BABYLON.Vector3.MinimizeToRef(min, box.minimumWorld, min);
        BABYLON.Vector3.MaximizeToRef(max, box.maximumWorld, max);

    });

    const center = min.add(max).scale(0.5);

    camera.setTarget(center);

    camera.radius = BABYLON.Vector3.Distance(min, max);

}