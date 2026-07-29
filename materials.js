/* ==========================================================
   materials.js
========================================================== */

function applyMaterial(type){

    if(!selectedMesh) return;

    const mat = new BABYLON.PBRMaterial(type, scene);

    switch(type){

        case "plastic":

            mat.albedoColor = new BABYLON.Color3(0.8,0.2,0.2);
            mat.roughness = 0.6;
            mat.metallic = 0;

        break;

        case "metal":

            mat.albedoColor = new BABYLON.Color3(0.7,0.7,0.75);
            mat.metallic = 1;
            mat.roughness = 0.2;

        break;

        case "gold":

            mat.albedoColor = new BABYLON.Color3(1,0.84,0);
            mat.metallic = 1;
            mat.roughness = 0.1;

        break;

        case "glass":

            mat.albedoColor = new BABYLON.Color3(0.8,0.9,1);
            mat.alpha = 0.35;
            mat.metallic = 0;
            mat.roughness = 0;

        break;

        case "wood":

            mat.albedoColor = new BABYLON.Color3(0.55,0.33,0.12);
            mat.roughness = 0.9;

        break;

        case "stone":

            mat.albedoColor = new BABYLON.Color3(0.5,0.5,0.5);
            mat.roughness = 1;

        break;

    }

    selectedMesh.material = mat;

}