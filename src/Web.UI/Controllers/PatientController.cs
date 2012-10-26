using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.UI.Data;
using Web.UI.Models;

namespace Web.UI.Controllers
{
    public class PatientController : ApiController
    {
        SoftKittyDataContext db;

        public PatientController()
        {
            db = new SoftKittyDataContext();
        }

        // GET api/patient
        public IEnumerable<Patient> Get()
        {
            return db.Patients;
        }

        // GET api/patient/5
        public Patient Get(int id)
        {
            return db.Patients.SingleOrDefault(pet => pet.Id == id);
        }

        // POST api/patient
        public HttpResponseMessage Post([FromBody]Patient patient)
        {
            try
            {
                db.Patients.Add(patient);
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, patient);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotModified, ex.Message);
            }
        }

        // PUT api/patient/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/patient/5
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                db.Patients.Remove(db.Patients.SingleOrDefault(p => p.Id == id));
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotModified, ex.Message);
            }

        }
    }
}