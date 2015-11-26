#pragma strict

var player : GameObject;
var speed : float = 0.75;
var spriteLeft: Sprite;
var spriteRight: Sprite;

function Start () {

}

function Update () {
	if (Input.touchCount > 0)
	 {
	     var touch = Input.GetTouch(0);
	     if (touch.position.x < Screen.width/2)
	     {
	         this.transform.position.x += -0.5 * Time.deltaTime * 25;
	        // GetComponent(SpriteRenderer).sprite = spriteLeft;
	     }
	     else if (touch.position.x > Screen.width/2)
	     {
	         this.transform.position.x += 0.5 * Time.deltaTime * 25;
	         //GetComponent(SpriteRenderer).sprite = spriteRight;
	     }
	 }
}

