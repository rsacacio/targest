package br.com.catalisa.targest.ticket

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.converter.ConvertTicketType
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.user.TargestUser

class TicketTypeListController {

    static responseFormats = ['json']

    TicketTypeListService ticketTypeListService

    def load(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))

        List<TicketType> ticketTypes = ticketTypeListService.load(userLogged, company)
        respond ticketTypes: ConvertTicketType.domainInDtoList(ticketTypes)
    }

}
