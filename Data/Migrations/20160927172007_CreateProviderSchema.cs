using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace msrfp_3717.Data.Migrations
{
    public partial class CreateProviderSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Provider",
                columns: table => new
                {
                    Provider_id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    CountyName = table.Column<string>(nullable: true),
                    CountyNumber = table.Column<int>(nullable: false),
                    LicenseType = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhysicalCity = table.Column<string>(nullable: true),
                    PhysicalZipCode = table.Column<string>(nullable: true),
                    ProviderCapacity = table.Column<int>(nullable: false),
                    ProviderName = table.Column<string>(nullable: true),
                    ProviderType = table.Column<int>(nullable: false),
                    ProviderTypeDescription = table.Column<string>(nullable: true),
                    QualityRating = table.Column<int>(nullable: false),
                    QualityRatingDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Provider", x => x.Provider_id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Provider");
        }
    }
}
