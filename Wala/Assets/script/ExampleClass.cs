using UnityEngine;
using System.Collections;

public class ExampleClass: MonoBehaviour {
    void Start() {
        RenderSettings.fogColor = Color.blue;
        RenderSettings.fog = true;
    }
}