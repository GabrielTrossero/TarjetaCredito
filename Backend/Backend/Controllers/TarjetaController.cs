using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarjetaController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public TarjetaController(AplicationDbContext context) { 
            _context = context;
        }

        // GET: api/<TarjetaController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listTarjetas = await _context.TarjetaCredito.ToListAsync();//para que le reconozca que el método va a ser asyncrono
                return Ok(listTarjetas); //return status 200
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); //devuelvo un 404
            }
        }

        // POST api/<TarjetaController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TarjetaCredito tarjeta)
        {
            try
            {
                _context.Add(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(tarjeta);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); //devuelvo un 404
            }
        }

        // PUT api/<TarjetaController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TarjetaCredito tarjeta)
        {
            try
            {
                if(id == tarjeta.Id)
                {
                    _context.Update(tarjeta);
                    await _context.SaveChangesAsync();
                    return Ok(new {message = "La tarjeta fue actualizada con éxito"});
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); //devuelvo un 404
            }
        }

        // DELETE api/<TarjetaController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var tarjeta = await _context.TarjetaCredito.FindAsync(id);
                
                if (tarjeta != null)
                {
                    _context.Remove(tarjeta);
                    await _context.SaveChangesAsync();
                    return Ok(new { message = "La tarjeta fue eliminada con éxito" });
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); //devuelvo un 404
            }
        }
    }
}
