#pragma strict

function Start () {
	var random = Random.Range(1.5f, 2.0f);
	transform.localScale = Vector3(random,1,0);
}

function Update () {
	Destroy(this.gameObject, 500);
}