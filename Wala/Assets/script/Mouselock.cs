using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Mouselock : MonoBehaviour {

	public bool isLocked;
	void Start() {

	}

	void SetCursorLock(bool isLocked)
	{
		this.isLocked = isLocked;
		Screen.lockCursor = isLocked;
		Cursor.visible = !isLocked;
	}



	void Update() {
		if (Input.GetKeyDown (KeyCode.Escape))
			SetCursorLock(!isLocked);

		}
	}

