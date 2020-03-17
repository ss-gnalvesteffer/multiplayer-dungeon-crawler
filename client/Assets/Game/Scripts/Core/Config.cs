namespace Game.Scripts.Core
{
    public class Config
    {
        public static string ServerUrl { get; set; } = "http://localhost:3000";
        public static string AssetsUrl { get; set; } = $"{ServerUrl}/assets";
        public static string ManifestUrl { get; set; } = $"{ServerUrl}/assetmanifest";
    }
}
