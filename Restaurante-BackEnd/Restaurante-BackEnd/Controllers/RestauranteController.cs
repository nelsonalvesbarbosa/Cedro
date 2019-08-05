using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Restaurante_BackEnd.Controllers
{
	[Route("api/[controller]")]
	[Produces("application/json")]
	public class RestauranteController : ControllerBase
	{
		readonly RestauranteContext context;

		public RestauranteController(RestauranteContext context)
		{
			this.context = context;
		}

		[HttpGet]
		public ActionResult<IEnumerable<Model.Restaurante>> Get()
		{
				return context.Restaurantes;

		}

		[HttpGet("{id}")]
		public ActionResult<Model.Restaurante[]> Get(String id)
		{
			try
			{
				if (id == "0")
					return NotFound();

				if (!int.TryParse(id, out var value))
				{
					Model.Restaurante[] nome = context.Restaurantes.Where(r => r.nome == id.TrimStart()).ToArray();
					return nome;
				}

				Model.Restaurante[] restaurante = context.Restaurantes.Where(r => r.id.ToString() == id).ToArray();
				if (restaurante == null)
					return NotFound();
				return restaurante;
			}
			catch
			{
				return StatusCode(500);
			}
		}

		//[HttpGet("{nome}")]
		//[ActionName("PorNome")]
		//public ActionResult<Model.Restaurante> PorNome(String nome = "")
		//{
		//	try
		//	{
		//		var restaurante = context.Restaurantes.Where(r => r.nome == nome).FirstOrDefault();

		//		if (restaurante != null)
		//			return restaurante;
		//		return NotFound();
		//	}
		//	catch
		//	{
		//		return StatusCode(500);
		//	}
		//}

		//[HttpPost]
		//public async Task<IActionResult> Post([FromBody] Model.Restaurante restaurante)
		//{
		//	context.Restaurantes.Add(restaurante);
		//	await context.SaveChangesAsync();

		//	return Ok(restaurante);
		//}

		[HttpPost]
		public ActionResult<IEnumerable<Model.Restaurante>> Post([FromBody] Model.Restaurante restaurante)
		{
			try
			{
				if (restaurante.id == 0)
				{	
					context.Restaurantes.Add(restaurante);
					context.SaveChanges();
					return context.Restaurantes;
				}
				var pratosLista = context.Pratos.Where(r => r.restauranteId == restaurante.id);
				foreach (var prato in pratosLista)
				{
					prato.restauranteNome = restaurante.nome;
					context.Entry(prato).State = EntityState.Modified;
					//context.SaveChanges();
				}
				context.Entry(restaurante).State = EntityState.Modified;
				context.SaveChanges();
				return context.Restaurantes;
			}
			catch (Exception e)
			{
				return StatusCode(500);
			}
		}

		[HttpDelete("{id}")]
		public ActionResult<IEnumerable<Model.Restaurante>> Delete( int id)
		{
			try
			{
				var restaurante = context.Restaurantes.Find(id);
				if (restaurante != null)
				{
					var pratosLista = context.Pratos.Where(r => r.restauranteId == id);

					foreach (var prato in pratosLista)
						context.Pratos.Remove(prato);

					context.Restaurantes.Remove(restaurante);
					context.SaveChanges();

					return context.Restaurantes;
				}
				return NotFound();
			}
			catch
			{
				return StatusCode(500);
			}
		}
	}
}