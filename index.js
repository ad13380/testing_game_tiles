(function() {
  let canvas = document.getElementById("gameArea");
  let context = canvas.getContext("2d");

  let map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,
            1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
            1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,
            1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,
            1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  let size = 40;

  canvas.width = 16 * size;
  canvas.height = 9 * size;

  controller = {
    move:function(event) {
      let pointer_x = event.clientX - context.canvas.getBoundingClientRect().left;
      let pointer_y = event.clientY - context.canvas.getBoundingClientRect().top;
      let tile_x =  Math.floor(pointer_x/size);
      let tile_y = Math.floor(pointer_y/size);
      document.getElementById("tile_loc").innerHTML = `Tile X: ${tile_x} Tile Y: ${tile_y}`;
      console.log(tile_x, tile_y)
    }
  };


  let drawMap = function() {
    for (let index = 0; index < map.length; index ++) {
      context.fillStyle = (map[index] == 1) ? "#000000" : "#ffffff";
      context.fillRect((index % 16) * size, Math.floor(index/16) * size, size, size);
    }
  };

  drawMap()

  context.canvas.addEventListener("mousemove", controller.move);
})();