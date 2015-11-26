#pragma strict

var platform : GameObject;
var player : GameObject;
var score = 0;
var counter = 1;
var position : Vector3;

function Start () {

}

function Update () {
	
	score = player.GetComponent(Points).score/2;
	if(score > (60 * counter)){
		Create();
		counter++;
	}
}
function Create(){
	var platformed : GameObject = Instantiate(platform, new Vector3(-1, (-95 + (counter * 68)), 0), this.transform.rotation);
	score = 0;
}