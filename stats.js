/* ==========================================================
   stats.js
========================================================== */

function updateStats(){

    const objects = document.getElementById("objects");
    const vertices = document.getElementById("vertices");
    const triangles = document.getElementById("triangles");
    const fps = document.getElementById("fps");

    if(objects){
        objects.textContent = "Objetos : " + sceneObjects.length;
    }

    if(vertices){

        let totalVertices = 0;

        sceneObjects.forEach(mesh => {

            const data = mesh.getTotalVertices?.();

            if(data){
                totalVertices += data;
            }

        });

        vertices.textContent = "Vértices : " + totalVertices;
    }

    if(triangles){

        let totalTriangles = 0;

        sceneObjects.forEach(mesh => {

            const indices = mesh.getTotalIndices?.();

            if(indices){
                totalTriangles += Math.floor(indices / 3);
            }

        });

        triangles.textContent = "Triángulos : " + totalTriangles;
    }

    if(fps){

        fps.textContent =
            "FPS : " + Math.round(engine.getFps());

    }

}