package br.com.catalisa.targest.ticket

import br.com.catalisa.targest.command.ticket.TicketTypeAddCommand
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.user.TargestUser

class TicketTypeAddController {

    static responseFormats = ['json']

    TicketTypeAddService ticketTypeAddService

    def save(TicketTypeAddCommand command){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(command.idCripto as String)))
        boolean success = ticketTypeAddService.save(userLogged, company, command.name, command.description)
        respond success: success
    }

}
