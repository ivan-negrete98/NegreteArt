/* ==========================================================
   textures.js
========================================================== */

const textureLibrary = [];

function loadTexture(file){

    const url = URL.createObjectURL(file);

    const texture = new BABYLON.Texture(

        url,

        scene

    );

    texture.name = file.name;

    textureLibrary.push(texture);

    refreshTextureLibrary();

}

function refreshTextureLibrary(){

    const list = document.getElementById("textureList");

    if(!list) return;

    list.innerHTML = "";

    textureLibrary.forEach(texture=>{

        const item = document.createElement("div");

        item.className = "scene-item";

        item.innerHTML = "🖼 " + texture.name;

        item.onclick = function(){

            if(

                selectedMesh &&

                selectedMesh.material

            ){

                selectedMesh.material.diffuseTexture = texture;

            }

        };

        list.appendChild(item);

    });

}