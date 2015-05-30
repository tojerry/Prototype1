using UnityEngine;
using System.Collections;

public class test : MonoBehaviour {

	float speed= 0.1f;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		transform.Translate (Vector3.up * Time.deltaTime);
	
	}
}
