#pragma strict

public var score = 0;
var timer : float;
var scoreTextLiving : UI.Text;
var scoreTextDead : UI.Text;
var highScoreText : UI.Text;
var newBest : UI.Text;
var highScore : int;

function Start () {
	newBest.enabled = false; 
	scoreTextDead.enabled = false;
	highScore = PlayerPrefs.GetInt("highscore");
	Debug.Log(""+PlayerPrefs.GetInt("highscore"));
}

function OnTriggerEnter2D(collider : Collider2D) {    
   if(collider.tag == "Coin") {        
      score += 5;  
      GetComponent.<AudioSource>().Play();      
      Destroy(collider.gameObject);
	}
	if(collider.tag == "Platform"){
		scoreTextLiving.enabled = false;
		scoreTextDead.enabled = true;
	}
	if(collider.tag == "Untagged"){
		scoreTextLiving.enabled = false;
		scoreTextDead.enabled = true;
	}
}
function Update(){
	timer += Time.deltaTime;
	if(timer > 1){
		score += 1;
		timer = 0;
	}
	ScoreUpdate();
}
function ScoreUpdate(){
	scoreTextLiving.text = score.ToString();
	scoreTextDead.text = "Final: " +score.ToString();
}
function highScoreUpdate(){
	if(score > highScore){
		highScore = score;
		PlayerPrefs.SetInt("highscore", highScore);
		PlayerPrefs.Save();
		Debug.Log(""+PlayerPrefs.GetInt("highscore"));
		newBest.enabled = true;
	}
	highScoreText.text = "Best: " +PlayerPrefs.GetInt("highscore").ToString();
}
  