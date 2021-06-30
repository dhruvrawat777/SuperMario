const render = {
    init(gameObject) {
        //Draw sky
        gameObject.tool.fillStyle = "#3498db"
        gameObject.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
        gameObject.tool.drawImage(castleImage,40,40,200,150);

    }
}

class Game {
    init() {
        const canvas = document.querySelector(".board");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        // Canvas is small by default so making it the same size as window
        const tool = canvas.getContext("2d");
        let gameObject = {
            tool, canvas
        };
        render.init(gameObject);
    }
    run() {

    }
    reset() {
        location.reload();
    }
}
preload().then(() => {
    const game = new Game();
    /* console.log(castleImage);
    console.log(cloudImage);
    console.log(mountainImage);
    console.log(spirteSheetImage);
    console.log(tilesetImage); */
    game.init();
});
