package br.com.catalisa.targest.ticket

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.CategoryStatus
import br.com.catalisa.targest.enumeration.TicketTypeStatus
import br.com.catalisa.targest.user.TargestUser

class TicketTypeAddService {

    public boolean save(TargestUser user, Company company, String name, String description){
        TicketType ticketType = new TicketType()
        ticketType.name = name
        ticketType.description = description
        ticketType.status = TicketTypeStatus.ACTIVE
        ticketType.creation = new Date()
        ticketType.company = company
        ticketType.save(flush: true, failOnError: true)

        return true
    }

}
