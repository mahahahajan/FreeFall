using UnityEngine;
using System.Collections;

public class newPlatformRandom : MonoBehaviour {

	// Use this for initialization
	void Start () {
		float daNum = Random.Range(-15f,3f);
		Vector2 myPos = this.transform.position;
		myPos.x += daNum;
		this.transform.position = myPos;
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
