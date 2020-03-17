using Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Items
{
    public class ItemStats
    {
        [JsonProperty("melee_accuracy")]
        public int MeleeAccuracy { get; set; }

        [JsonProperty("melee_strength")]
        public int MeleeStrength { get; set; }

        [JsonProperty("melee_defense")]
        public int MeleeDefense { get; set; }

        [JsonProperty("ranged_accuracy")]
        public int RangedAccuracy { get; set; }

        [JsonProperty("ranged_strength")]
        public int RangedStrength { get; set; }

        [JsonProperty("ranged_defense")]
        public int RangedDefense { get; set; }

        [JsonProperty("magic_accuracy")]
        public int MagicAccuracy { get; set; }

        [JsonProperty("magic_strength")]
        public int MagicStrength { get; set; }

        [JsonProperty("magic_defense")]
        public int MagicDefense { get; set; }
    }
}
