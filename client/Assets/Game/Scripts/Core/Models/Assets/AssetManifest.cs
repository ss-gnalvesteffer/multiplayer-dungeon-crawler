using Game.Scripts.Core.Models.Assets.Character;
using Game.Scripts.Core.Models.Assets.Equipment;
using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets
{
    public class AssetManifest
    {
        [JsonProperty("character")]
        public CharacterManifest CharacterManifest { get; set; }

        [JsonProperty("equipment")]
        public EquipmentManifest EquipmentManifest { get; set; }
    }
}
