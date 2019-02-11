import { Engine } from 'babylonjs'
import { Test } from './test';


if(Engine.isSupported()) {
    let canvas = <HTMLCanvasElement>document.getElementById("renderCanvas");
    let test = new Test(canvas);
    test.createScene();
    test.runRenderLoop();
} else {
    window.alert('Your device is not supported.');
}

