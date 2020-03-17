using System.Collections.Generic;
using Newtonsoft.Json;

namespace Game.Scripts.Core.Models.Assets.Character
{
    public class CharacterManifest
    {
        [JsonProperty("head_texture_path")]
        public string HeadTexturePath { get; set; }

        [JsonProperty("torso_texture_path")]
        public string TorsoTexturePath { get; set; }

        [JsonProperty("left_arm_texture_path")]
        public string LeftArmTexturePath { get; set; }

        [JsonProperty("left_hand_texture_path")]
        public string LeftHandTexturePath { get; set; }

        [JsonProperty("right_arm_texture_path")]
        public string RightArmTexturePath { get; set; }

        [JsonProperty("right_hand_texture_path")]
        public string RightHandTexturePath { get; set; }

        [JsonProperty("legs_texture_path")]
        public string LegsTexturePath { get; set; }

        [JsonProperty("feet_texture_path")]
        public string FeetTexturePath { get; set; }

        [JsonProperty("hair_styles")]
        public IEnumerable<HairStyle> HairStyles { get; set; }

        [JsonProperty("facial_hair_styles")]
        public IEnumerable<FacialHairStyle> FacialHairStyles { get; set; }
    }
}
