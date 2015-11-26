#pragma strict

var remains : GameObject;
var shrink: AnimationClip;
var spriteLeft: Sprite;
var spriteRight: Sprite;
var restartPanel : GameObject;




function Update () {
	if(Input.GetAxis("Horizontal")){
		this.transform.position.x += Input.GetAxis("Horizontal") * 0.25;
		if(Input.GetAxis("Horizontal") < 0){
			//GetComponent(SpriteRenderer).sprite = spriteLeft;
		}
		else{
			//GetComponent(SpriteRenderer).sprite = spriteRight;
		}
		
	}
}
function OnTriggerEnter2D(collider : Collider2D){
	if(collider.tag == "Platform"){
	PlayTheAnimation();
	Destroy(this.gameObject, 0.5);
	restartPanel.GetComponent.<Animation>().Play("ButtonSlide");
	SendMessage("highScoreUpdate");
	}
}
function PlayTheAnimation(){
	GetComponent.<Animation>().Play();
}
