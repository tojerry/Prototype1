using UnityEngine;
using System.Collections;

public class Rocket : MonoBehaviour {

	GameObject rocket;
	bool engineActive = false;
	public GameObject rocketEffect;
	float speed = 0.5f;
	float r = 100f;
	public Vector3 circleCenter;

	// Use this for initialization
	void Start () 
	{
		if( rocket==null )
			rocket = this.gameObject;

		//rocketEffect.SetActive( !rocketEffect.activeSelf);
	}
	
	// Update is called once per frame
	void FixedUpdate () 
	{
		if(Input.GetKeyDown("space"))
		   {
				engineActive = !engineActive;
				rocketEffect.SetActive( rocketEffect.activeSelf);
			}
		if(engineActive)
		{
	
			float t = Time.time * speed;
			float x = r*Mathf.Cos( t ) + circleCenter.x;
			float y = r*Mathf.Sin( t ) + circleCenter.y;

			rocket.transform.position = new Vector3( x, y, 0.5f );

			//rocket.AddForce( (transform.up * speed));
		}
	
	}
}

//http://answers.unity3d.com/questions/631201/draw-an-ellipse-in-unity-3d.html
//http://answers.unity3d.com/questions/566264/how-to-use-raycast-here.html?sort=oldest