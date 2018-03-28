// 0 - INTRODUCTION
SLIDES.push(
{
	chapter: "Networks",
	boxes:[
		{words:"_1a", x:280, y:0, w:400, align:"center"}
	],
	sims:[
		{
			x: 0,
			y: 10,
			fullscreen: true,
			network: {"contagion":0,"peeps":[[408,87,0],[340,472,0],[285,402,0],[339,76,0],[214,266,0],[219,181,0],[594,146,0],[256,339,0],[273,114,0],[519,137,0],[450,163,0],[635,278,0],[640,199,0],[508,422,0],[438,445,0],[588,360,0],[858,39,0],[902,137,0],[890,344,0],[922,242,0],[390,299,1]],"connections":[[1,2],[2,7],[7,4],[4,5],[5,8],[8,3],[3,0],[0,10],[9,6],[9,10],[6,12],[12,11],[11,15],[15,13],[13,14],[14,1]]},
			onupdate: function(sim){
				if(sim.connections.length>5){
					//console.log("WIN");
				}
			}
		}
	]
}
);