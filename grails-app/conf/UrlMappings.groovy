class UrlMappings {

	static mappings = {
        "/api/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        "/api/public/register/$action?"(controller: "register")
        "/"(view: "/index")
        "500"(view:'/error')
	}
}
