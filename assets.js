/* ==========================================================
   assets.js
   Navegador de Assets
========================================================== */

const assets = [];

function addAsset(name, type, data){

    assets.push({
        name: name,
        type: type,
        data: data
    });

    refreshAssets();

}

function refreshAssets(){

    const list = document.getElementById("assetsList");

    if(!list) return;

    list.innerHTML = "";

    assets.forEach(asset=>{

        const item = document.createElement("div");

        item.className = "asset-item";

        item.innerHTML =
            getAssetIcon(asset.type) + " " + asset.name;

        list.appendChild(item);

    });

}

function getAssetIcon(type){

    switch(type){

        case "model":
            return "📦";

        case "texture":
            return "🖼";

        case "material":
            return "🎨";

        case "project":
            return "📁";

        default:
            return "📄";

    }

}