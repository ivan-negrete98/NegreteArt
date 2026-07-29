/* ==========================================================
   primitives.js
   Creación de objetos
========================================================== */

/* ==========================================================
   IDs únicos
========================================================== */

function generateUUID(){

    return crypto.randomUUID();

}



function registerObject(mesh){


mesh.metadata = {

    id: generateUUID(),

    locked: false,

    visible: true,

    layer: "Default"

};


    mesh.position.x = (Math.random() - 0.5) * 8;
    mesh.position.y = 1;
    mesh.position.z = (Math.random() - 0.5) * 8;

    mesh.material = createRandomMaterial();

    shadowGenerator.addShadowCaster(mesh);

    sceneObjects.push(mesh);

    addObjectToLayer(mesh);

    selectMesh(mesh);

}







function createRandomMaterial(){

    const mat = new BABYLON.StandardMaterial(

        "Mat_" + sceneObjects.length,

        scene

    );

    mat.diffuseColor = new BABYLON.Color3(

        Math.random(),

        Math.random(),

        Math.random()

    );

    mat.specularColor = new BABYLON.Color3(

        0.3,

        0.3,

        0.3

    );

    return mat;

}



function createPrimitive(type){

    let mesh = null;

    switch(type){

        case "cube":

            mesh = BABYLON.MeshBuilder.CreateBox(
                "Cube_" + sceneObjects.length,
                { size:2 },
                scene
            );

        break;

        case "sphere":

            mesh = BABYLON.MeshBuilder.CreateSphere(
                "Sphere_" + sceneObjects.length,
                {
                    diameter:2,
                    segments:32
                },
                scene
            );

        break;

        case "cylinder":

            mesh = BABYLON.MeshBuilder.CreateCylinder(
                "Cylinder_" + sceneObjects.length,
                {
                    height:2,
                    diameter:2
                },
                scene
            );

        break;

        case "plane":

            mesh = BABYLON.MeshBuilder.CreatePlane(
                "Plane_" + sceneObjects.length,
                { size:3 },
                scene
            );

            mesh.rotation.x = Math.PI / 2;

        break;

        case "cone":

            mesh = BABYLON.MeshBuilder.CreateCylinder(
                "Cone_" + sceneObjects.length,
                {
                    height:2,
                    diameterTop:0,
                    diameterBottom:2
                },
                scene
            );

        break;

        case "torus":

            mesh = BABYLON.MeshBuilder.CreateTorus(
                "Torus_" + sceneObjects.length,
                {
                    diameter:2,
                    thickness:0.5
                },
                scene
            );

        break;

        case "capsule":

            mesh = BABYLON.MeshBuilder.CreateCapsule(
                "Capsule_" + sceneObjects.length,
                {
                    height:3,
                    radius:0.6
                },
                scene
            );

        break;

        case "ground":

            mesh = BABYLON.MeshBuilder.CreateGround(
                "Ground_" + sceneObjects.length,
                {
                    width:5,
                    height:5
                },
                scene
            );

        break;

    }

    if(mesh){

        registerObject(mesh);

    }

}




function registerObject(mesh){

    mesh.position.x = (Math.random() - 0.5) * 8;
    mesh.position.z = (Math.random() - 0.5) * 8;

    if(mesh.name.startsWith("Ground")){

        mesh.position.y = 0;

    }else{

        mesh.position.y = 1;

    }

    mesh.material = createRandomMaterial();

    shadowGenerator.addShadowCaster(mesh);

    sceneObjects.push(mesh);

    selectMesh(mesh);

}



function createDefaultCube(scene){

    const cube = BABYLON.MeshBuilder.CreateBox(
        "Cube",
        {
            size: 2
        },
        scene
    );

    registerObject(cube);

}
