using System.Collections.Generic;
using System.Web.Http;
using Web.UI.Models;

namespace Web.UI.Controllers
{
    public class PatientController : ApiController
    {
        // GET api/patient
        public IEnumerable<Patient> Get()
        {
            return new List<Patient>
                       {
                           new Patient {Id = 1, Name = "Bobo"},
                           new Patient {Id = 2, Name = "Rex"}
                       };
        }

        // GET api/patient/5
        public Patient Get(int id)
        {
            return new Patient {Id = id, Name = "Rex"};
        }

        // POST api/patient
        public void Post([FromBody]string value)
        {
        }

        // PUT api/patient/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/patient/5
        public void Delete(int id)
        {
        }
    }
}