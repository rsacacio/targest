package br.com.catalisa.targest.campaign

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.enumeration.CategoryStatus
import br.com.catalisa.targest.enumeration.TicketTypeStatus
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.ticket.TicketType
import br.com.catalisa.targest.user.TargestUser

class CampaignAddService {

    public List<TicketType> loadTicketTypes(TargestUser user, Store store){
        return TicketType.findAllByCompanyAndStatus(store.company, TicketTypeStatus.ACTIVE)
    }

    public List<Category> loadCategories(TargestUser user, Store store){
        return Category.findAllByCompanyAndStatus(store.company, CategoryStatus.ACTIVE)
    }

}
