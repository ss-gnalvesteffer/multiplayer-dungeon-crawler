using UnityEngine;

/// <summary>
/// Forefront class for the server communication.
/// </summary>
public class SocketCommunication : MonoBehaviour
{
    private string server;
    private WsClient client;

    public string HostIpAddress = "localhost";
    public int HostPort = 3001;

    public static SocketCommunication Instance { get; private set; }

    private void Awake()
    {
        server = "ws://" + HostIpAddress + ":" + HostPort;
        client = new WsClient(server);
        Instance = this;
    }

    private void Start()
    {
        Connect();
    }

    private void Update()
    {
        var receivedMessagesQueue = client.receiveQueue;
        string message;
        while (receivedMessagesQueue.TryPeek(out message))
        {
            receivedMessagesQueue.TryDequeue(out message);
            OnMessageReceived(message);
        }
    }

    private void OnMessageReceived(string message)
    {
        Debug.Log(message);
    }

    public async void Connect()
    {
        await client.Connect();
    }

    public void Send(string data)
    {
        client.Send(data);
    }
}
