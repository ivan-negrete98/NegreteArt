/* ==========================================================
   NEGRETEART IMPORTER v1.0
========================================================== */

function importModel(file){

    const url = URL.createObjectURL(file);

    BABYLON.SceneLoader.ImportMesh(

        "",

        "",

        url,

        scene,

        function(meshes){

            meshes.forEach(function(mesh){

                if(mesh.name === "__root__") return;

                mesh.position = BABYLON.Vector3.Zero();

                mesh.scaling = new BABYLON.Vector3(1,1,1);

                mesh.isPickable = true;

                if(shadowGenerator){

                    shadowGenerator.addShadowCaster(mesh);

                }

                sceneObjects.push(mesh);

            });

            if(meshes.length > 0){

                selectMesh(meshes[0]);

            }

            updateStats();

            refreshSceneExplorer();

            URL.revokeObjectURL(url);

        },

        null,

        function(scene,message){

            console.error(message);

            URL.revokeObjectURL(url);

        }

    );

}



/* ==========================================================
   PARTE 2
   DRAG & DROP
========================================================== */

function initializeDragAndDrop(){

    const viewport = document.getElementById("viewport");

    viewport.addEventListener("dragover", function(event){

        event.preventDefault();

        viewport.classList.add("dragover");

    });

    viewport.addEventListener("dragleave", function(event){

        viewport.classList.remove("dragover");

    });

    viewport.addEventListener("drop", function(event){

        viewport.classList.remove("dragover");

        event.preventDefault();

        const files = event.dataTransfer.files;

        if(files.length === 0){

            return;

        }

        const file = files[0];

        const extension = file.name
            .split(".")
            .pop()
            .toLowerCase();

        if(
            extension !== "glb" &&
            extension !== "gltf" &&
            extension !== "obj"
        ){

            alert("Formato no soportado.");

            return;

        }

        importModel(file);

    });

}




