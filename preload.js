const castleImage = new Image();
const cloudImage = new Image();
const mountainImage = new Image();
const spirteSheetImage = new Image();
const tilesetImage = new Image();

function preload() {
    castleImage.src = "./assets/sprites/castle.png";
    cloudImage.src = "./assets/sprites/clouds.png";
    mountainImage.src = "./assets/sprites/mountain.png";
    spirteSheetImage.src = "./assets/sprites/spritesheet.png";
    tilesetImage.src = "./assets/sprites/tileset_gutter.png";

    return new Promise((resolve, reject) => {
        let p1 = new Promise((resolve, reject) => {
            castleImage.addEventListener("load", () => {
                resolve();
            });
        });
        let p2 = new Promise((resolve, reject) => {
            cloudImage.addEventListener("load", () => {
                resolve();
            });
        });
        let p3 = new Promise((resolve, reject) => {
            mountainImage.addEventListener("load", () => {
                resolve();
            });
        });
        let p4 = new Promise((resolve, reject) => {
            spirteSheetImage.addEventListener("load", () => {
                resolve();
            });
        });
        let p5 = new Promise((resolve, reject) => {
            tilesetImage.addEventListener("load", () => {
                resolve();
            });
        });
        let bigPromise = Promise.all([p1, p2, p3, p4, p5]);
        bigPromise.then(() => {
            resolve();
        });
    });
}