import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';


export class Test {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _engine: BABYLON.Engine;
    private readonly _scene: BABYLON.Scene;
    private _camera: BABYLON.FreeCamera;
    private _light: BABYLON.HemisphericLight;
    private _converterMaterial: BABYLON.StandardMaterial;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._engine = new BABYLON.Engine(canvas, false);
        this._scene = new BABYLON.Scene(this._engine);

        <any>window.addEventListener("resize", () => {
            this._engine.resize();
        }, {passive: true});
    }

    public runRenderLoop(): void {
        this._engine.runRenderLoop(() => {
            this._scene.render()
            this._scene.debugLayer.show();
        })
    }

    public createScene(): void {

        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        this._camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5,-10), this._scene);
    
        // Target the camera to scene origin.
        this._camera.setTarget(BABYLON.Vector3.Zero());
    
        // Attach the camera to the canvas.
        this._camera.attachControl(this._canvas, false);
    
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);
    
        // Create a built-in "sphere" shape. 
        var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, this._scene);
    
        // Move the sphere upward 1/2 of its height.
        sphere.position.y = 1;
    
        // Create a built-in "ground" shape.
        var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, this._scene);

    }
}