package br.com.catalisa.targest.helper

import br.com.catalisa.targest.user.TargestUser
import grails.plugin.springsecurity.SpringSecurityService
import grails.util.Holders

public final class UserHelper {

    private UserHelper() {
    }

    public static TargestUser getUser() {
        SpringSecurityService springSecurityService = (SpringSecurityService) Holders.grailsApplication.mainContext.getBean("springSecurityService")
        TargestUser netUser = TargestUser.findByEmail(springSecurityService.principal.username)
        netUser
    }
}
