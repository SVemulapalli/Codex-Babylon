let basePrompt = `/* This document contains a BabylonJS scene, natural language commands and the BabylonJS code needed to accomplish them */

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

/* Make the light more intense */
BABYLON.Engine.LastCreatedScene.lights[0].intensity = 10

/* Make the light less intense */
BABYLON.Engine.LastCreatedScene.lights[0].intensity = 1

/* Make a cube */
cube = BABYLON.MeshBuilder.CreateBox("cube", {size: 1}, BABYLON.Engine.LastCreatedScene);

/* Move the cube up */
cube.position.y += 1

/* Move it to the left */
cube.position.x -= 1

/* Make it change color when the mouse is over it */
cube.actionManager = new BABYLON.ActionManager(BABYLON.Engine.LastCreatedScene);

hoverAction = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
cube.material = new BABYLON.StandardMaterial("mat", BABYLON.Engine.LastCreatedScene);
cube.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
});

unHoverAction = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
cube.material = new BABYLON.StandardMaterial("mat", BABYLON.Engine.LastCreatedScene);
cube.material.diffuseColor = new BABYLON.Color3(0, 1, 1);
});

cube.actionManager.registerAction(hoverAction);
cube.actionManager.registerAction(unHoverAction);

/* Make the block teal */
cube.material = new BABYLON.StandardMaterial("mat", BABYLON.Engine.LastCreatedScene);
cube.material.diffuseColor = new BABYLON.Color3(0, 1, 1);

/* Now make it spin */
spinningCube = setInterval(() => {
    BABYLON.Engine.LastCreatedScene.meshes[0].rotation.y += 0.02
}, 10)

/* Make it stop */
clearInterval(spinningCube)

/* Put a sphere on top of the cube */
sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, BABYLON.Engine.LastCreatedScene)
sphere.position.y = 1

/* create a series of larger and larger concentric torusses, like a tornado */
torus = BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 1, thickness: 0.1}, BABYLON.Engine.LastCreatedScene);

torusArray = [];

for (let i = 0; i < 10; i++) {
    torusArray.push(BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 1 + i, thickness: 0.1}, BABYLON.Engine.LastCreatedScene));
    torusArray[i].position.y = i;
}

/* Delete the sphere */
BABYLON.Engine.LastCreatedScene.meshes[1].dispose()

/* Delete the torusses */
for (let i = 0; i < torusArray.length; i++) {
    torusArray[i].dispose();
}
torusArray = null;
`;

module.exports = {
    basePrompt
};