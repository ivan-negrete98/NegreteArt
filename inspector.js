/* ==========================================================
   inspector.js
========================================================== */

function updateInspector(){

    if(!selectedMesh) return;

    const objectName = document.getElementById("objectName");
    const posX = document.getElementById("posX");
    const posY = document.getElementById("posY");
    const posZ = document.getElementById("posZ");
    const rotX = document.getElementById("rotX");
    const rotY = document.getElementById("rotY");
    const rotZ = document.getElementById("rotZ");
    const scale = document.getElementById("scale");

    if(objectName) objectName.value = selectedMesh.name;
    if(posX) posX.value = selectedMesh.position.x.toFixed(2);
    if(posY) posY.value = selectedMesh.position.y.toFixed(2);
    if(posZ) posZ.value = selectedMesh.position.z.toFixed(2);

    if(rotX) rotX.value = BABYLON.Tools.ToDegrees(selectedMesh.rotation.x).toFixed(1);
    if(rotY) rotY.value = BABYLON.Tools.ToDegrees(selectedMesh.rotation.y).toFixed(1);
    if(rotZ) rotZ.value = BABYLON.Tools.ToDegrees(selectedMesh.rotation.z).toFixed(1);

    if(scale) scale.value = selectedMesh.scaling.x.toFixed(2);
}

function registerInspectorEvents(){

    ["posX","posY","posZ"].forEach((id, index)=>{

        const input = document.getElementById(id);

        if(!input) return;

        input.oninput = function(){

            if(!selectedMesh) return;

            const value = parseFloat(this.value);

            if(index===0) selectedMesh.position.x = value;
            if(index===1) selectedMesh.position.y = value;
            if(index===2) selectedMesh.position.z = value;

        };

    });

    const scale = document.getElementById("scale");

    if(scale){

        scale.oninput = function(){

            if(!selectedMesh) return;

            const s = parseFloat(this.value);

            selectedMesh.scaling.set(s,s,s);

        };

    }

}