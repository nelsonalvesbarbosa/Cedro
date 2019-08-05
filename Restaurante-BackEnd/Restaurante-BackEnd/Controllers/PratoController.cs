using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Restaurante_BackEnd.Controllers
{
    [Route("api/[controller]")]
	[Produces("application/json")]
    public class PratoController : ControllerBase
    {
		readonly RestauranteContext context;

		public PratoController(RestauranteContext context)
		{
			this.context = context;
		}

		[HttpGet]
		public ActionResult<IEnumerable<Model.Prato>> Get()
		{
			return context.Pratos;
		}

		[HttpGet("{id}")]
		public ActionResult<Model.Prato[]> Get(Int32 id)
		{
			try
			{
				Model.Prato[] prato = context.Pratos.Where(r => r.id == id).ToArray();
				if (prato == null)
					return NotFound();
				return prato;

			}
			catch
			{
				return StatusCode(500);
			}
		}

		[HttpPost]
		public ActionResult<IEnumerable<Model.Prato>> Post([FromBody] Model.Prato prato)
		{
			try
			{
				var restaurante = context.Restaurantes.Find(prato.restauranteId);
				prato.restauranteNome = restaurante.nome;

				if (prato.id == 0)
				{
					context.Pratos.Add(prato);
					context.SaveChanges();
					return context.Pratos;
				}
				context.Entry(prato).State = EntityState.Modified;
				context.SaveChanges();
				return context.Pratos;
			}
			catch
			{
				return StatusCode(500);
			}
		}

		[HttpDelete("{id}")]
		public ActionResult<IEnumerable<Model.Prato>> Delete(int id)
		{
			try
			{
				var prato = context.Pratos.Find(id);
				if (prato != null)
				{
					context.Pratos.Remove(prato);
					context.SaveChanges();
					return context.Pratos;
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