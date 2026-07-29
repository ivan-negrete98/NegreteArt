/* ==========================================================
   hierarchy.js
========================================================== */

function refreshHierarchy(){

    const list = document.getElementById("hierarchyList");

    if(!list) return;

    list.innerHTML = "";

    sceneObjects.forEach(mesh=>{

        const item = document.createElement("div");

        item.className = "scene-item";

        let icon = "📦";

        if(mesh.parent){
            icon = "└📦";
        }

        item.innerHTML = icon + " " + mesh.name;

        if(mesh === selectedMesh){
            item.classList.add("selected");
        }

        item.onclick = function(){

            selectMesh(mesh);

        };

        list.appendChild(item);

    });

}