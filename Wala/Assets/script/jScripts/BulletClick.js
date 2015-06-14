#pragma strict

var x : float;
var y : float;
var spawnNew : GameObject;


function Start () 
{
	x = Random.Range (0,1.5);
	transform.localScale += new Vector3(x, x, 0);

}

function Update () 
{
	 if (Input.GetMouseButtonDown (0))
        {
             var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
             var hit : RaycastHit;
             if (Physics.Raycast(ray,hit))
             {
             	if(hit.collider.gameObject.name=="Bullet" && x <= 0.8)
             	{
             		y = Random.Range (0,1);
             		Instantiate(spawnNew,hit.point,Quaternion.identity);
             		transform.localScale += new Vector3(y, y, 0);
             	
             	}
             }
        }


}

function OnTriggerEnter (other : Collider)
{

}