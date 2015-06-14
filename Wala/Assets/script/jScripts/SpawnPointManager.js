#pragma strict

var spawnPoint : GameObject;
var spawnTime : float;
private var timer : float;

function Start () {

}

function Update () 
{
	var x : float = Random.Range (0,5);
	var pos : Vector3 = Vector3 (x,transform.position.y,transform.position.z);
	

	timer += Time.deltaTime;
	if (timer >= spawnTime)
	{
		Instantiate(spawnPoint, pos, transform.rotation);
		timer = 0;
	}	
}