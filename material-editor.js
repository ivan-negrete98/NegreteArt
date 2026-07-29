/* ==========================================================
   material-editor.js
========================================================== */

const materialLibrary = [];

function registerMaterial(material){

    if(!material) return;

    if(materialLibrary.includes(material)) return;

    materialLibrary.push(material);

    refreshMaterialLibrary();

}

function refreshMaterialLibrary(){

    const list = document.getElementById("materialList");

    if(!list) return;

    list.innerHTML = "";

    materialLibrary.forEach(material=>{

        const item = document.createElement("div");

        item.className = "scene-item";

        item.innerHTML = "🎨 " + material.name;

        item.onclick = function(){

            if(selectedMesh){

                selectedMesh.material = material;

            }

        };

        list.appendChild(item);

    });

}