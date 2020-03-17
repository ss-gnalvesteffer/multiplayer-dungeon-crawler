using Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Items
{
    public class HandItemBase : ItemBase
    {
        [JsonProperty("does_hide_hand")]
        public bool DoesHideHand { get; set; }
    }
}
