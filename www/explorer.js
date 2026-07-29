/* ==========================================================
   explorer.js
========================================================== */

let sceneList = null;

function initializeSceneExplorer(){

    sceneList = document.getElementById("sceneList");

    refreshSceneExplorer();

}

function refreshSceneExplorer(){

    if(!sceneList) return;

    sceneList.innerHTML = "";

    sceneObjects.forEach(mesh => {

        const item = document.createElement("div");

        item.className = "scene-item";

        if(mesh === selectedMesh){

            item.classList.add("selected");

        }

        item.textContent = "📦 " + mesh.name;

        item.onclick = function(){

            selectMesh(mesh);

        };

        sceneList.appendChild(item);

    });

}

function renameSelected(newName){

    if(!selectedMesh) return;

    selectedMesh.name = newName;

    refreshSceneExplorer();

}