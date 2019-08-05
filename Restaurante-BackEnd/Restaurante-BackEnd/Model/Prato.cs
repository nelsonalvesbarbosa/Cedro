using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante_BackEnd.Model
{
	public class Prato
	{
		public int id { get; set; }
		public string nome { get; set; }
		public decimal preco { get; set; }
		public int restauranteId { get; set; }
		public string restauranteNome { get; set; }
	}
}
