/* ==========================================================
   project.js
   Administrador de proyectos .n-art
========================================================== */

let currentProject = {

    format: "NegreteArt Studio",

    extension: "n-art",

    version: "1.0",

    projectName: "Nuevo Proyecto",

    author: "",

    created: new Date().toISOString(),

    modified: new Date().toISOString()

};




function newProject(){

    if(!confirm("¿Crear un proyecto nuevo?")){

        return;

    }

    sceneObjects.forEach(mesh=>mesh.dispose());

    sceneObjects.length = 0;

    selectedMesh = null;

    currentProject.projectName = "Nuevo Proyecto";

    createDefaultCube(scene);

    refreshSceneExplorer();

}


function exportSceneData(){

    const objects = [];

    sceneObjects.forEach(mesh=>{

        objects.push({

    id: mesh.metadata.id,

    name: mesh.name,

    type: mesh.name.split("_")[0],

    visible: mesh.metadata.visible,

    locked: mesh.metadata.locked,

    layer: mesh.metadata.layer,

    position:{

        x:mesh.position.x,

        y:mesh.position.y,

        z:mesh.position.z

    },

    rotation:{

        x:mesh.rotation.x,

        y:mesh.rotation.y,

        z:mesh.rotation.z

    },

    scale:{

        x:mesh.scaling.x,

        y:mesh.scaling.y,

        z:mesh.scaling.z

    }

});
    
    

    return {

        ...currentProject,

        modified:new Date().toISOString(),

        objects

    };

}



function saveProject(){

    const data = exportSceneData();

    const json = JSON.stringify(data,null,4);

    const blob = new Blob(

        [json],

        {

            type:"application/json"

        }

    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = currentProject.projectName + ".n-art";

    link.click();

}


