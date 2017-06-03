var robos = [
  { name: "gemini", image: "http://i.imgur.com/EZDkT8V.png" },
  { name: "hard", image: "http://i.imgur.com/xe27bqS.png" },
  { name: "magnet", image: "http://i.imgur.com/DjgBY9v.png" },
  { name: "needle", image: "http://i.imgur.com/JOTdbDd.png" },
  { name: "shadow", image: "http://i.imgur.com/grEQpGr.png" },
  { name: "snake", image: "http://i.imgur.com/lXq35f3.png" },
  { name: "spark", image: "http://i.imgur.com/P8xMGeg.png" },
  { name: "top", image: "http://i.imgur.com/tLznhhp.png" }
];

function generateRobo(num,robo) {
	return $('<div class="robo"><input class="check_box" id="' + robo.name + num + '_box" type="checkbox" /><label for="' + robo.name + num + '_box" style="background:url(\'' + robo.image + '\') no-repeat;"/></div>')
}

function generateRobos(numOfSets) {
	for(var i=0; i<numOfSets; i++) {
		var set = $("<div></div>")
		$('#bg').append(set)
		robos.map(generateRobo.bind(this,i)).forEach(r => set.append(r))
	}
}

$(document).ready(generateRobos.bind(this,2))