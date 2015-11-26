using UnityEngine;
using System.Collections;

public class Spawner : MonoBehaviour {

	public GameObject platform;
	public float timer;


	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void FixedUpdate () {
		float theGreater = 2;
		timer += Time.deltaTime;
		if(timer > 1.5){
			timer = 0;
			theGreater = (theGreater/2) + (theGreater * .25f);
			Create();
		}
	}
	void Create() {
		int daNum = Random.Range(-1,1);
		Vector2 myPos = this.transform.position;
		myPos.y -= 15;
		GameObject newPlat = (GameObject) Instantiate(platform, myPos, Quaternion.identity);
		Destroy(newPlat.gameObject, 5);
	}
}
