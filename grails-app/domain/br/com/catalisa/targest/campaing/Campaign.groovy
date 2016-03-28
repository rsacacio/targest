package br.com.catalisa.targest.campaing

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.enumeration.CampaignStatus
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.ticket.TicketType

class Campaign {

    String name
    String description
    Date creation
    Date start
    Date end
    CampaignStatus status
    Store store
    TicketType ticketType

    static hasMany = [categories: Category]

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: true
        creation nullable: false
        start nullable: false
        end nullable: false
        status nullable: false
        store nullable: false
        categories nullable: false
        ticketType nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'campaign_id_seq']
        description type: 'text'
    }


}
