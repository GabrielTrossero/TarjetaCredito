using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    //DbContext lo que hace es crear una instancia de nuestra BD para:
    //Almacenar datos, realizar querys, crear la BD a partir del modelo, etc
    public class AplicationDbContext: DbContext
    {
        //Para mapear nuestros modelos con las tablas de la BD
        DbSet<TarjetaCredito> TarjetaCredito { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {
            
        }
    }
}
