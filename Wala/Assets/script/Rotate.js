#pragma strict
import Holoville.HOTween;

public var showFloating:boolean;
public var stepAngle:float[];
private var currentAngle:float[];

function Start(){	
	currentAngle = [0.0,0.0,0.0];
	if (showFloating){
		var newPos = new Vector3(this.transform.position.x, this.transform.position.y+0.4, this.transform.position.z);
		HOTween.To(this.transform, 2, new TweenParms()
			.Prop("position", newPos, false)
			.Ease(EaseType.Linear)
			.Loops(-1,LoopType.Yoyo)
		);
	}
}

function Rotate() {
	for(var i=0;i<currentAngle.length;i++){
		if (currentAngle[i] == 360)
			currentAngle[i]=0.0f;
//		currentAngle[i]+=stepAngle[i];

		var modelAngle:float = 0.0f;
		switch(i){
			case 0:
				modelAngle = transform.localEulerAngles.x * Time.deltaTime;
				break;
			case 1:
				modelAngle = transform.localEulerAngles.y;
				break;
			case 2:
				modelAngle = 0;//transform.localEulerAngles.z * Time.deltaTime;
				break;
		}
		currentAngle[i] = (stepAngle[i]==0.0)?modelAngle:(currentAngle[i]+stepAngle[i]);
//		Debug.Log("Idx="+i+", Val="+currentAngle[i]);
	}
//		(stepAngle[0]==0.0)?transform.localEulerAngles.x:currentAngle[0], 
//		(stepAngle[1]==0.0)?transform.localEulerAngles.y:currentAngle[1], 
//		(stepAngle[2]==0.0)?transform.localEulerAngles.z:currentAngle[2]
	
	transform.localRotation = Quaternion.identity;
	transform.localEulerAngles = new Vector3(currentAngle[0], currentAngle[1], currentAngle[2]);
	
	if (this.tag == "Road")
		Debug.Log("Angle = "+currentAngle[2]);
	
	//HOTween.To(this, 2, "myRectProperty", new Rect(0, 0, 200, 100));
	
//	HOTween.To(this.transform, 1, new TweenParms()
//		.Prop("eulerAngles", new Vector3(currentAngle, 0, 0), false)
//		.Ease(EaseType.EaseInOutBack) // Ease
//		.OnComplete(function(){
//
//		})
//	);
}

function Update() {
	//transform.Rotate(Vector3.up * Time.deltaTime);
	Rotate();
}	