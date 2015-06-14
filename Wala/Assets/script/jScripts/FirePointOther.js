#pragma strict

var firePoint : Transform;
public var bullet : Transform;
private var timer : float;
var timeBetweenShoot : float;

function Update () 
{
	timer += Time.deltaTime;
	if(timer >= timeBetweenShoot)
	{
		Shoot ();
		timer = 0f;
	}
}


function Shoot ()
{
	Instantiate (bullet, transform.position, transform.rotation);
}