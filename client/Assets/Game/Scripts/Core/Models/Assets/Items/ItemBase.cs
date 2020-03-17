using Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Items
{
    public abstract class ItemBase : EquipableAssetBase
    {
        [JsonProperty("stats")]
        public ItemStats Stats { get; set; } = new ItemStats();
    }
}
