#pragma strict

public var bulletSpeed : float;
//var effect : GameObject;

function Start () {

}

function Update () 
{
	transform.Translate (Vector3.right * Time.deltaTime * bulletSpeed * -1);
	Destroy (gameObject,10);
//	Destroy (effect.gameObject,3);
	//if ()

}

function OnTriggerEnter2D (other : Collider2D)
{
	if (other.tag == "Player")
	{
		Destroy(gameObject);
	}
}