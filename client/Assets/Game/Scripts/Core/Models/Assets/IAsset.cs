using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets
{
    public interface IAsset
    {
        [JsonProperty("id")]
        string Id { get; set; }

        [JsonProperty("name")]
        string Name { get; set; }

        [JsonProperty("equipped_texture_path")]
        string EquippedTexturePath { get; set; }
    }
}
