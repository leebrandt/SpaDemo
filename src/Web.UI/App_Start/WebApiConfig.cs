﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Web.UI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{Id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
