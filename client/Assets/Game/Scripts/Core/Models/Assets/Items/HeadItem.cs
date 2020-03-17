using Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Items
{
    public class HeadItem : ItemBase
    {
        [JsonProperty("does_hide_facial_hair")]
        public bool DoesHideFacialHair { get; set; }
    }
}
