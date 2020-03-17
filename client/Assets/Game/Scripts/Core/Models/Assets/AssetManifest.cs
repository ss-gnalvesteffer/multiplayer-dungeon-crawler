using Game.Scripts.Core.Models.Assets.Character;
using Game.Scripts.Core.Models.Assets.Items;
using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets
{
    public class AssetManifest
    {
        [JsonProperty("character")]
        public CharacterManifest CharacterManifest { get; set; }

        [JsonProperty("items")]
        public ItemManifest ItemManifest { get; set; }
    }
}
