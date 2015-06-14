#pragma strict

static var rotateSpeed : float;
var speed : float;

function Start () 
{
	rotateSpeed = speed;
}

function Update () 
{
	
	transform.Rotate(Vector3.forward*rotateSpeed*Time.fixedDeltaTime*1,Space.World);
}