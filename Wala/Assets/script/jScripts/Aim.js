#pragma strict

var target : Transform;



function Update () 
{

	var targetPos : Vector3 = target.position;
	var difference : Vector3 = targetPos - transform.position;
	difference.Normalize();
	var rot : float = Mathf.Atan2 (difference.y, difference.x) * Mathf.Rad2Deg;
	//print (rot);
	this.transform.rotation = Quaternion.Euler (0f,0f,rot+180 );	
	



}