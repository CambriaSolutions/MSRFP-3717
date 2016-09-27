using System.ComponentModel.DataAnnotations;

namespace msrfp_3717.Models
{
    public class Provider {
            [Key]
            public int Provider_id { get; set; }
            public string ProviderName { get; set; }
            public string LicenseType { get; set; }
            public int ProviderType { get; set; }
            public string ProviderTypeDescription { get; set; }
            public int QualityRating { get; set; }
            public string QualityRatingDescription { get; set; }
            public int ProviderCapacity { get; set; }
            public string PhysicalCity { get; set; }
            public string PhysicalZipCode { get; set; }
            public int CountyNumber { get; set; }
            public string CountyName { get; set; }
            public string PhoneNumber { get; set; }
    }
}
