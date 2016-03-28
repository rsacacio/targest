package br.com.catalisa.targest.ticket

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.TicketTypeStatus

class TicketType {

    String name
    String description
    Date creation
    TicketTypeStatus status
    Company company

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: true
        creation nullable: false
        status nullable: false
        company nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'ticket_type_id_seq']
        description type: 'text'
    }

}
