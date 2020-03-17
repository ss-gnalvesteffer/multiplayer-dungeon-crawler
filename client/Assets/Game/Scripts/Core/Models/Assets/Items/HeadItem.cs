using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Items
{
    public class HeadItem : ItemBase
    {
        [JsonProperty("does_cover_facial_hair")]
        public bool DoesCoverFacialHair { get; set; }
    }
}
