var mm3 = [
  { name: "gemini", image: "img/mm3/gemini.png" },
  { name: "hard", image: "img/mm3/hard.png" },
  { name: "magnet", image: "img/mm3/magnet.png" },
  { name: "needle", image: "img/mm3/needle.png" },
  { name: "shadow", image: "img/mm3/shadow.png" },
  { name: "snake", image: "img/mm3/snake.png" },
  { name: "spark", image: "img/mm3/spark.png" },
  { name: "top", image: "img/mm3/top.png" }
];

var mm2 = [
  { name: "air", image: "img/mm2/air.png" },
  { name: "bubble", image: "img/mm2/bubble.png" },
  { name: "clash", image: "img/mm2/clash.png" },
  { name: "flash", image: "img/mm2/flash.png" },
  { name: "heat", image: "img/mm2/heat.png" },
  { name: "metal", image: "img/mm2/metal.png" },
  { name: "quick", image: "img/mm2/quick.png" },
  { name: "wood", image: "img/mm2/wood.png" }
];

var mm3castle = [
  { name: "turtles", image: "img/mm3/turtles.png" },
  { name: "devil", image: "img/mm3/devil.png" },
  { name: "clones", image: "img/mm3/clones.png" },
  { name: "refights", image: "img/mm3/refights.png" },
  { name: "wily", image: "img/mm3/wily.png" },
  { name: "gamma", image: "img/mm3/gamma.png" }
];

function generateRobo(num,robo) {
	if(robo.name == 'refights')
		return $('<div class="robo"><input class="check_box wide" id="' + robo.name + num + '_box" type="checkbox" /><label for="' + robo.name + num + '_box" style="background:url(\'' + robo.image + '\') no-repeat;"/></div>')
	return $('<div class="robo"><input class="check_box" id="' + robo.name + num + '_box" type="checkbox" /><label for="' + robo.name + num + '_box" style="background:url(\'' + robo.image + '\') no-repeat;"/></div>')
}

function generateRobos(numOfSets,robos) {
	for(var i=0; i<numOfSets; i++) {
		var set = $("<div></div>")
		$('#bg').append(set)
		robos.map(generateRobo.bind(this,i)).forEach(r => set.append(r))
	}
}
