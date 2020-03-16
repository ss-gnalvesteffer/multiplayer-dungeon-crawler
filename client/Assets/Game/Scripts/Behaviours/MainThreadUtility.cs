using System;
using System.Collections.Concurrent;
using UnityEngine;

public class MainThreadUtility : MonoBehaviour
{
    private readonly ConcurrentQueue<Action> RunOnMainThread = new ConcurrentQueue<Action>();

    public static MainThreadUtility Instance { get; private set; }

    private void Start()
    {
        Instance = this;
    }

    void Update()
    {
        Action queuedAction;
        while (RunOnMainThread.TryDequeue(out queuedAction))
        {
            queuedAction();
        }
    }
}
