using System.Data.Entity;
using Web.UI.Models;

namespace Web.UI.Data
{
    public class SoftKittyDataContext : DbContext
    {
        public DbSet<Patient> Patients { get; set; }
    }
}