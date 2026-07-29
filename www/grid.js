/* ==========================================================
   grid.js
   Grid y ejes
========================================================== */

function createGrid(scene){

    grid = BABYLON.MeshBuilder.CreateGround(

        "Grid",

        {

            width:500,

            height:500,

            subdivisions:100

        },

        scene

    );

    const material = new BABYLON.GridMaterial(

        "GridMaterial",

        scene

    );

    material.majorUnitFrequency = 10;

    material.minorUnitVisibility = 0.45;

    material.gridRatio = 1;

    material.opacity = 0.95;

    material.backFaceCulling = false;

    material.mainColor = new BABYLON.Color3(

        0.15,
        0.15,
        0.15

    );

    material.lineColor = new BABYLON.Color3(

        0.50,
        0.50,
        0.50

    );

    grid.material = material;

    grid.receiveShadows = true;

}


/* ==========================================
   EJES
========================================== */

let axesViewer = null;

function createAxes(scene){

    axesViewer = new BABYLON.AxesViewer(

        scene,

        5

    );

}



/* ==========================================
   GRID
========================================== */

function showGrid(){

    grid.setEnabled(true);

}

function hideGrid(){

    grid.setEnabled(false);

}

function toggleGrid(){

    grid.setEnabled(

        !grid.isEnabled()

    );

}



/* ==========================================
   EJES
========================================== */

function showAxes(){

    axesViewer.xAxis.setEnabled(true);

    axesViewer.yAxis.setEnabled(true);

    axesViewer.zAxis.setEnabled(true);

}

function hideAxes(){

    axesViewer.xAxis.setEnabled(false);

    axesViewer.yAxis.setEnabled(false);

    axesViewer.zAxis.setEnabled(false);

}

function toggleAxes(){

    const visible = axesViewer.xAxis.isEnabled();

    axesViewer.xAxis.setEnabled(!visible);

    axesViewer.yAxis.setEnabled(!visible);

    axesViewer.zAxis.setEnabled(!visible);

}




/* ==========================================
   TAMAÑO DEL GRID
========================================== */

function resizeGrid(size){

    grid.scaling.x = size / 500;

    grid.scaling.z = size / 500;

}


