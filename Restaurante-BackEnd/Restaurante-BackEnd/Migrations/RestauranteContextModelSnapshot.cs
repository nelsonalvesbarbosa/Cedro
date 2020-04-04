﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Restaurante_BackEnd;

namespace Restaurante_BackEnd.Migrations
{
    [DbContext(typeof(RestauranteContext))]
    partial class RestauranteContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Restaurante_BackEnd.Model.Prato", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("nome");

                    b.Property<decimal>("preco");

                    b.Property<int>("restauranteId");

                    b.Property<string>("restauranteNome");

                    b.HasKey("id");

                    b.ToTable("Pratos");
                });

            modelBuilder.Entity("Restaurante_BackEnd.Model.Restaurante", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("nome");

                    b.HasKey("id");

                    b.ToTable("Restaurantes");
                });
#pragma warning restore 612, 618
        }
    }
}