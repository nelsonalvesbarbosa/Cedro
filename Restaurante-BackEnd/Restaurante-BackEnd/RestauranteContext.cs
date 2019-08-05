using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante_BackEnd
{
	public class RestauranteContext: DbContext
	{
		public RestauranteContext(DbContextOptions<RestauranteContext> options) : base(options) { }

		public DbSet<Model.Restaurante> Restaurantes { get; set; }
		public DbSet<Model.Prato> Pratos { get; set; }

		//protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		//{
		//	//optionsBuilder.UseSqlServer(@"Server=CEDRONOTE-2901;Data Source=cedronote-2901;Initial Catalog=restaurante;Integrated Security=True");
		//}
	}
}
