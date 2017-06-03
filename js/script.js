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

function generateRobo(robo) {
	return $('<div><input class="check_box" id="' + robo.name + '_box" type="checkbox" /><label for="' + robo.name + '_box" style="background:url(\'' + robo.image + '\') no-repeat;"/></div>')
}

function generateRobos() {
	robos.map(generateRobo).forEach(r => $('#bg').append(r))
}

$(document).ready(generateRobos)