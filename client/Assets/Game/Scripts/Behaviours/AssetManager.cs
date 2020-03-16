using System;
using System.Collections;
using Game.Scripts.Core;
using Game.Scripts.Core.Models.Assets;
using Socket.Newtonsoft.Json;
using UnityEngine;
using UnityEngine.Networking;

public class AssetManager : MonoBehaviour
{
    public static AssetManager Instance { get; private set; }

    public AssetManifest AssetManifest { get; private set; }

    private void Start()
    {
        Instance = this;
        StartCoroutine(DownloadAssetManifest());
    }

    private IEnumerator DownloadAssetManifest()
    {
        var webRequest = UnityWebRequest.Get(Config.ManifestUrl);
        yield return webRequest.SendWebRequest();

        if (webRequest.isNetworkError || webRequest.isHttpError)
        {
            Debug.Log(webRequest.error);
        }
        else
        {
            AssetManifest = JsonConvert.DeserializeObject<AssetManifest>(webRequest.downloadHandler.text);
        }
    }

    public IEnumerator GetTexture(string texturePath, Action<Texture2D> onTextureRetrieved)
    {
        yield return new WaitUntil(() => AssetManifest != null);

        var webRequest = UnityWebRequestTexture.GetTexture($"{Config.AssetsUrl}/{texturePath}");
        yield return webRequest.SendWebRequest();

        if (webRequest.isNetworkError || webRequest.isHttpError)
        {
            Debug.Log(webRequest.error);
        }
        else
        {
            var texture = ((DownloadHandlerTexture)webRequest.downloadHandler).texture;
            onTextureRetrieved(texture);
        }
    }
}
