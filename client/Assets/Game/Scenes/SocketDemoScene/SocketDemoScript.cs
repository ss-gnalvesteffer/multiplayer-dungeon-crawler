using TMPro;
using UnityEngine;

public class SocketDemoScript : MonoBehaviour
{
    public TMP_InputField TextMeshProInputField;

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.KeypadEnter))
        {
            SocketCommunication.Instance.Send(TextMeshProInputField.text);
            TextMeshProInputField.text = string.Empty;
            TextMeshProInputField.ActivateInputField();
        }
    }
}
