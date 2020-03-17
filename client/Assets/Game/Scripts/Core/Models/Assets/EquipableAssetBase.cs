using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets
{
    public abstract class EquipableAssetBase
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("equipped_texture_path")]
        public string EquippedTexturePath { get; set; }
    }
}
