#pragma strict

var timer : float;
var counter = 1;
var random : int;
var platform1 : GameObject;
var platform2 : GameObject;
var platform3 : GameObject;

function Start () {

}

function Update () {
	random = Random.Range(0,2);
	timer += Time.deltaTime;
	if(timer > 10 * counter){
		if(random == 0){
			var platformed1 : GameObject = Instantiate(platform1, new Vector3(this.transform.position.x, this.transform.position.y - (13 * counter), 0), this.transform.rotation);
			timer = 0;
		}
		if(random == 1){
			var platformed2 : GameObject = Instantiate(platform2, new Vector3(this.transform.position.x, this.transform.position.y - (13 * counter), 0), this.transform.rotation);
			timer = 0;
		}
		if(random == 2){
			var platformed3 : GameObject = Instantiate(platform3, new Vector3(this.transform.position.x, this.transform.position.y - (13 * counter), 0), this.transform.rotation);
			timer = 0;
		}
	}
}