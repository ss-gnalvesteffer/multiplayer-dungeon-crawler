using System.Collections.Generic;
using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Equipment
{
    public class EquipmentManifest
    {
        [JsonProperty("back")]
        public IEnumerable<BackAsset> BackItems { get; set; }

        [JsonProperty("head")]
        public IEnumerable<HeadAsset> HeadItems { get; set; }

        [JsonProperty("neck")]
        public IEnumerable<NeckAsset> NeckItems { get; set; }

        [JsonProperty("torso")]
        public IEnumerable<TorsoAsset> TorsoItems { get; set; }

        [JsonProperty("gloves")]
        public IEnumerable<GloveAsset> GloveItems { get; set; }

        [JsonProperty("left_hand")]
        public IEnumerable<LeftHandAsset> LeftHandItems { get; set; }

        [JsonProperty("right_hand")]
        public IEnumerable<RightHandAsset> RightHandItems { get; set; }

        [JsonProperty("legs")]
        public IEnumerable<LegAsset> LegItems { get; set; }

        [JsonProperty("footwear")]
        public IEnumerable<FootwearAsset> FootwearItems { get; set; }
    }
}
