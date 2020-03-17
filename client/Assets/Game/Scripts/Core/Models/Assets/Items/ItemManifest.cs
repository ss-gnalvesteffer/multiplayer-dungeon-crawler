using System.Collections.Generic;
using Socket.Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Items
{
    public class ItemManifest
    {
        [JsonProperty("back")]
        public IEnumerable<BackItem> BackItems { get; set; }

        [JsonProperty("head")]
        public IEnumerable<HeadItem> HeadItems { get; set; }

        [JsonProperty("neck")]
        public IEnumerable<NeckItem> NeckItems { get; set; }

        [JsonProperty("torso")]
        public IEnumerable<TorsoItem> TorsoItems { get; set; }

        [JsonProperty("gloves")]
        public IEnumerable<GloveItem> GloveItems { get; set; }

        [JsonProperty("left_hand")]
        public IEnumerable<LeftHandItem> LeftHandItems { get; set; }

        [JsonProperty("right_hand")]
        public IEnumerable<RightHandItem> RightHandItems { get; set; }

        [JsonProperty("legs")]
        public IEnumerable<LegItem> LegItems { get; set; }

        [JsonProperty("feet")]
        public IEnumerable<FeetItem> FeetItems { get; set; }
    }
}
