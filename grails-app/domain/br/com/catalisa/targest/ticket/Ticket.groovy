package br.com.catalisa.targest.ticket

import br.com.catalisa.targest.campaing.Campaign
import br.com.catalisa.targest.enumeration.TicketStatus
import br.com.catalisa.targest.user.TargestUser

class Ticket {

    String uuid
    TargestUser user
    Campaign campaign
    TicketStatus status
    Date creation
    Date used
    double amount

    static constraints = {
        uuid nullable: false
        user nullable: true
        creation nullable: false
        campaign nullable: false
        user nullable: true
        status nullable: false
        amount nullable: true
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'ticket_id_seq']
    }

}
