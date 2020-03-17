namespace Game.Scripts.Core
{
    public class Config
    {
        public static string HttpServerUrl { get; set; } = "http://localhost:3000";
        public static string AssetsUrl { get; set; } = $"{HttpServerUrl}/assets";
        public static string ManifestUrl { get; set; } = $"{HttpServerUrl}/assetmanifest";
    }
}
