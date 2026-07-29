/* ==========================================================
   outliner.js
========================================================== */

function refreshOutliner(){

    const list = document.getElementById("sceneList");

    if(!list) return;

    list.innerHTML = "";

    sceneObjects.forEach(mesh=>{

        const row = document.createElement("div");

        row.className = "scene-item";

        if(mesh === selectedMesh){

            row.classList.add("selected");

        }

        const visible =
            mesh.isVisible ? "👁" : "🚫";

        const locked =
            mesh.metadata?.locked ? "🔒" : "";

        row.innerHTML =

            visible +
            " 📦 " +
            mesh.name +
            " " +
            locked;

        row.onclick = function(){

            selectMesh(mesh);

        };

        row.ondblclick = function(){

            renameObject(mesh);

        };

        list.appendChild(row);

    });

}


function renameObject(mesh){

    const name = prompt(

        "Nuevo nombre:",

        mesh.name

    );

    if(!name) return;

    mesh.name = name;

    refreshOutliner();

}



function toggleVisibility(){

    if(!selectedMesh) return;

    selectedMesh.isVisible =
        !selectedMesh.isVisible;

    refreshOutliner();

}


function toggleLock(){

    if(!selectedMesh) return;

    if(!selectedMesh.metadata){

        selectedMesh.metadata = {};

    }

    selectedMesh.metadata.locked =
        !selectedMesh.metadata.locked;

    refreshOutliner();

}



