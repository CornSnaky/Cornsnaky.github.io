/**
 * 将色相值（2-33）映射到红色到紫色的颜色代码（three.Color 对象）。
 *
 * @param {number} hueValue - 色相值，范围是 2 到 33。
 * @returns {three.Color} - three.Color 对象，表示红色到紫色渐变的对应颜色。
 * @throws {Error} - 如果 hueValue 超出范围，则抛出错误。
 */
function hueToRedPurple(hueValue) {
    
    if (hueValue < 1 || hueValue > 33) {
        throw new Error("hueValue 必须在 1 到 33 之间");
    }

    // 将 hueValue 映射到 0-360 的色相范围（用于 HSL）。
    // 将 1 映射到 0 (红色)，33 映射到 300 (紫色)
    const hue = ((hueValue - 1) / (33 - 1)) * 300;

    // 将 HSL 转换为 RGB。 使用辅助函数。
    const { r, g, b } = hslToRgb(hue, 1, 0.5); // 饱和度为 1，亮度为 0.5

    // 创建 three.Color 对象
    const color = new three.Color(r / 255, g / 255, b / 255);

    return color;
}

/**
 * 将 HSL 颜色值转换为 RGB。 参考：https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param {number} h - 色相 (0-360)。
 * @param {number} s - 饱和度 (0-1)。
 * @param {number} l - 亮度 (0-1)。
 * @returns {{r: number, g: number, b: number}} - 具有 r, g, b 值的对象，范围是 0-255。
 */
function hslToRgb(h, s, l) {
    h /= 360;

    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
}

function createTextLabel(text, position) {
    // 创建canvas并绘制文本
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 128; // 调整canvas的宽度
    canvas.height = 128; // 调整canvas的高度

    // 动态调整字体大小
    let fontSize = 80;
    context.font = `Bold ${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // 计算文本宽度
    let textWidth = context.measureText(text).width;

    // 如果文本宽度超过canvas宽度，则调整字体大小
    while (textWidth > canvas.width * 0.9 && fontSize > 10) {
        fontSize -= 5;
        context.font = `Bold ${fontSize}px Arial`;
        textWidth = context.measureText(text).width;
    }

    context.fillStyle = 'black';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // 创建纹理并应用到sprite
    const texture = new three.CanvasTexture(canvas);
    const spriteMaterial = new three.SpriteMaterial({ map: texture });
    const sprite = new three.Sprite(spriteMaterial);
    sprite.position.copy(position);
    sprite.position.y += 0.5; // 调整文本标签的y位置，使其在方块内部
    sprite.scale.set(0.5, 0.5, 1); // 调整sprite的大小，使其在方块内部
    sprite.renderOrder = 1; // 设置渲染顺序，确保文本标签在方块上方
    scene.add(sprite);

    return sprite;
}
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
import * as three from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

let score=0;
let gameover=false;
let notpuzzlemode=true;
let puzzlesolved=false;
let map=[[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],//a
      [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
      [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
      [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]];//d
      //从左往右是界面从下到上每行
      //←       s          w      →
      //←eq→ 
addNewNumber();
addNewNumber();
function moveQ(){
    let changed=false;
    
    for (let k = 3; k >= 0; k--) {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                if (map[i][j][k]!=0) {
                    let to=k;
                    if(to!=3){
                        while (map[i][j][to+1]==0 && to<3){
                            to++;
                            if(to==3)break;
                        }
                        if(to<2){
                            if(map[i][j][to+1]==map[i][j][k] && map[i][j][to+2]==map[i][j][k]){
                                map[i][j][to+2]=3*map[i][j][k];
                                score+=map[i][j][to+2];
                                map[i][j][to+1]=0;
                                map[i][j][k]=0;
                                changed=true;
                                continue;
                            }
                        }
                        
                        if(to!=k){
                            map[i][j][to]=map[i][j][k];
                            map[i][j][k]=0;
                            changed=true;
                        }
                        
                    }
                }
            }
        }
    }
    
    if(changed && notpuzzlemode){
        addNewNumber();
    }
}
function moveE(){
    let changed=false;
    for (let k = 0; k <=3; k++) {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                if (map[i][j][k]!=0) {
                    let to=k;
                    if(to!=0){
                        while (map[i][j][to-1]==0 && to>0){
                            to--;
                            if(to==0)break;
                        }
                        if(to>1){
                            if(map[i][j][to-1]==map[i][j][k] && map[i][j][to-2]==map[i][j][k]){
                                map[i][j][to-2]=3*map[i][j][k];
                                score+=map[i][j][to-2];
                                map[i][j][to-1]=0;
                                map[i][j][k]=0;
                                changed=true;
                                continue;
                            }
                        }
                        
                        if(to!=k){
                            map[i][j][to]=map[i][j][k];
                            map[i][j][k]=0;
                            changed=true;
                        }
                        
                    }
                }
            }
        }
    }
    if(changed && notpuzzlemode){
        addNewNumber();
    }   
   
}
function moveD(){
    let changed=false;
    for (let i = 3; i>=0; i--) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (map[i][j][k]!=0) {
                    let to=i;
                    if(to!=3){
                        while (map[to+1][j][k]==0 && to<3){
                            to++;
                            if(to==3)break;
                        }
                        if(to<2){
                            if(map[to+1][j][k]==map[i][j][k] && map[to+2][j][k]==map[i][j][k]){
                                map[to+2][j][k]=3*map[i][j][k];
                                score+=map[to+2][j][k];
                                map[to+1][j][k]=0;
                                map[i][j][k]=0;
                                changed=true;
                                continue;
                            }
                        }
                        
                        if(to!=i){
                            map[to][j][k]=map[i][j][k];
                            map[i][j][k]=0;
                            changed=true;
                        }
                        
                    }
                }
            }
        }
    }
    if(changed && notpuzzlemode){
        addNewNumber();
    }
    
}
function moveA(){
    let changed=false;
    for (let i = 0; i <=3; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (map[i][j][k]!=0) {
                    let to=i;
                    if(to!=0){
                        while (map[to-1][j][k]==0 && to>0){
                            to--;
                            if(to==0)break;
                        }
                        if(to>1){
                            if(map[to-1][j][k]==map[i][j][k] && map[to-2][j][k]==map[i][j][k]){
                                map[to-2][j][k]=3*map[i][j][k];
                                score+=map[to-2][j][k];
                                map[to-1][j][k]=0;
                                map[i][j][k]=0;
                                changed=true;
                                continue;
                            }
                        }
                        
                        if(to!=i){
                            map[to][j][k]=map[i][j][k];
                            map[i][j][k]=0;
                            changed=true;
                        }
                        
                    }
                }
            }
        }
    }
    if(changed && notpuzzlemode){
        addNewNumber();
    }
    
}
function moveW(){
    let changed=false;
    for (let j = 3; j>=0; j--) {
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                if (map[i][j][k]!=0) {
                    let to=j;
                    if(to!=3){
                        while (map[i][to+1][k]==0 && to<3){
                            to++;
                            if(to==3)break;
                        }
                        if(to<2){
                            if(map[i][to+1][k]==map[i][j][k] && map[i][to+2][k]==map[i][j][k]){
                                map[i][to+2][k]=3*map[i][j][k];
                                score+=map[i][to+2][k];
                                map[i][to+1][k]=0;
                                map[i][j][k]=0;
                                changed=true;
                                continue;
                            }
                            
                        }
                        
                        if(to!=j){
                            map[i][to][k]=map[i][j][k];
                            map[i][j][k]=0;
                            changed=true;
                        }
                        
                    }
                }
            }
        }
    }
    if(changed && notpuzzlemode){
        addNewNumber();
    }
    
}
function moveS(){
    let changed=false;
    for (let j = 0; j <=3; j++) {
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                if (map[i][j][k]!=0) {
                    let to=j;
                    if(to!=0){
                        while (map[i][to-1][k]==0 && to>0){
                            to--;
                            if(to==0)break;
                            
                        }
                        
                        if(to>1){
                            if(map[i][to-1][k]==map[i][j][k] && map[i][to-2][k]==map[i][j][k]){
                                map[i][to-2][k]=3*map[i][j][k];
                                score+=map[i][to-2][k];
                                map[i][to-1][k]=0;
                                map[i][j][k]=0;
                                changed=true;
                                continue;
                            }
                            
                        }
                        
                        if(to!=j){
                            map[i][to][k]=map[i][j][k];
                            map[i][j][k]=0;
                            changed=true;
                        }
                    }
                }
            }
        }
    }
    if(changed && notpuzzlemode){
        addNewNumber();
    }
    
}
function addNewNumber(){
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (map[i][j][k] === 0) {
                    emptyCells.push({i, j, k});
                }
            }
        }
    }
    if (emptyCells.length > 0) {
        const randomIndex = randInt(0, emptyCells.length - 1);
        const {i, j, k} = emptyCells[randomIndex];
        // 随机生成2或3
        map[i][j][k] = Math.random() <= 0.5 ? 3 : 9; 
        
    }
    else{
        gameover=true;
    }
    
}
const scene = new three.Scene();

scene.background = new three.Color( 0xF3F3FF );
const camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new three.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建 OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

controls.enablePan=false;
function updateScene(){
    // 清除场景中的所有对象
    while(scene.children.length > 0){
        scene.remove(scene.children[0]);
    }
    const geometry = new three.BoxGeometry( 1, 1, 1 );
    const edges = new three.EdgesGeometry(geometry);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                // 每次都新建一个 LineSegments 和新的 geometry
                const lineGeometry = edges.clone();
                lineGeometry.translate(i-1.5, j-1.5, k-1.5); // 每个立方体在y轴上间隔2个单位
                const line = new three.LineSegments(lineGeometry, new three.LineBasicMaterial({ color: 0x000000, 
                    transparent: true, 
                    opacity: 0.1
                }));
                scene.add(line);
                
                
                if (map[i][j][k]!=0) {
                    
                    const material = new three.MeshBasicMaterial( { color: hueToRedPurple(Math.floor(Math.log10(map[i][j][k])/Math.log10(3))), transparent:true,opacity:0.5,depthWrite:false} );
                    const cube=map[i][j][k]!=0?new three.Mesh(geometry,material):null;  
                    cube.position.set(i-1.5, j-1.5, k-1.5);
                    let textlabel=createTextLabel(map[i][j][k], new three.Vector3(i-1.5, j-1.5, k-1.5));
                    textlabel.name=map[i][j][k];
                    textlabel.position.set(i-1.5, j-1.5, k-1.5);
                    textlabel.scale.set(1, 1, 1);
                    scene.add(textlabel);
                    scene.add(cube);
                }
            }
        }
    }
    let textlabelq=createTextLabel("q", new three.Vector3(0, -0.5, 6));
    scene.add(textlabelq);
    let textlabele=createTextLabel("e", new three.Vector3(0, -0.5, -6));
    scene.add(textlabele);
    let textlabelw=createTextLabel("w", new three.Vector3(0, 6, 0));
    scene.add(textlabelw);
    let textlabels=createTextLabel("s", new three.Vector3(0, -6, 0));
    scene.add(textlabels);
    let textlabela=createTextLabel("a", new three.Vector3(-6, -0.5, 0));
    scene.add(textlabela);
    let textlabeld=createTextLabel("d", new three.Vector3(6, -0.5, 0));
    scene.add(textlabeld);
    
}
updateScene();
camera.position.z = 10;
window.addEventListener('keyup',(event)=>{
    if(event.key=="q"){
        moveQ();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
    updateScene();
    }
    if(event.key=="e"){
        moveE();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
    updateScene();
    }
    if(event.key=="d"){
        moveD();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
    updateScene();
    }
    if(event.key=="a"){
        moveA();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
    updateScene();
    }
    if(event.key=="w"){
        moveW();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
    updateScene();
    }
    if(event.key=="s"){
        moveS();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    }
    
    
});
function animate() {
  controls.update(); // 每帧更新控制器
  renderer.render( scene, camera );
  
}
//为按钮绑定事件
{
    let button=document.getElementById("buttonq")
    button.addEventListener('click', function() {
        moveQ();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    });
    button=document.getElementById("buttone")
    button.addEventListener('click', function() {
        moveE();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    });
    button=document.getElementById("buttona")
    button.addEventListener('click', function() {
        moveA();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    });
    button=document.getElementById("buttond")
    button.addEventListener('click', function() {
        moveD();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    });
    button=document.getElementById("buttons")
    button.addEventListener('click', function() {
        moveS();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    });
    button=document.getElementById("buttonw")
    button.addEventListener('click', function() {
        moveW();
        document.getElementById("score").innerText="score:"+score+"  无法操作后可以刷新以重开 同一排三个才可合成";
        updateScene();
    });
}
renderer.setAnimationLoop( animate );