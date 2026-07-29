/* ==========================================================
   layers.js
========================================================== */

const layers = [

    {
        name:"Default",
        visible:true,
        locked:false,
        objects:[]
    }

];

let activeLayer = 0;

function addObjectToLayer(mesh,index=0){

    if(!layers[index].objects.includes(mesh)){

        layers[index].objects.push(mesh);

        mesh.metadata = mesh.metadata || {};

        mesh.metadata.layer = index;

    }

}

function refreshLayers(){

    const list = document.getElementById("layerList");

    if(!list) return;

    list.innerHTML = "";

    layers.forEach((layer,index)=>{

        const item = document.createElement("div");

        item.className = "scene-item";

        item.innerHTML =
            (layer.visible ? "👁 " : "🚫 ") +
            layer.name;

        if(index===activeLayer){

            item.classList.add("selected");

        }

        item.onclick=function(){

            activeLayer=index;

            refreshLayers();

        };

        list.appendChild(item);

    });

}



function createLayer(){

    const name=prompt("Nombre de la capa");

    if(!name) return;

    layers.push({

        name:name,

        visible:true,

        locked:false,

        objects:[]

    });

    refreshLayers();

}



function toggleLayerVisibility(){

    const layer=layers[activeLayer];

    layer.visible=!layer.visible;

    layer.objects.forEach(mesh=>{

        mesh.isVisible=layer.visible;

    });

    refreshLayers();

}



function toggleLayerLock(){

    const layer=layers[activeLayer];

    layer.locked=!layer.locked;

    layer.objects.forEach(mesh=>{

        mesh.metadata=mesh.metadata||{};

        mesh.metadata.locked=layer.locked;

    });

    refreshLayers();

}







