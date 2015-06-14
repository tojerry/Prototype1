#pragma strict

var speed : float = 10.0;
public var target : Transform;

function Awake ()
{
	target = GameObject.FindGameObjectWithTag("Platform").transform;
}

function Update() 
{
//	var relativePos : Vector2 = target.position - transform.position;
//    transform.rotation = Quaternion.LookRotation(relativePos);  
	transform.LookAt(target,Vector3.forward);
	transform.rotation.x = 0;
	transform.rotation.y = 0;
    transform.RotateAround (Vector3.zero, Vector3.forward, speed * Time.deltaTime);
}

function OnTriggerEnter2D (other : Collider2D)
{
	if(other.tag == "Player")
	{
		if(gameObject.tag == "Human")
		Destroy (gameObject);
	}
}