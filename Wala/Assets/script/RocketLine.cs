using UnityEngine;
using System.Collections;

public class RocketLine : MonoBehaviour {

	public Transform targetPoint;
	float speed= 1f;


	// Use this for initialization
	void Start () {

		//targetPoint = GameObject.FindGameObjectWithTag("Player").transform;
	
	}
	
	// Update is called once per frame
	void Update () {


			transform.LookAt(targetPoint,Vector3.forward);
			transform.localRotation = Quaternion.identity;
			transform.RotateAround (Vector3.zero, Vector3.forward, speed * Time.deltaTime);
	
	}

	void OnTriggerEnter(Collider other)
	{
		if (other.tag == "Player")
		{
			Destroy(gameObject);
		}

	
	}



}
