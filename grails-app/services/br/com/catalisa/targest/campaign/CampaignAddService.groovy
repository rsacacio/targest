package br.com.catalisa.targest.campaign

import br.com.catalisa.targest.campaing.Campaign
import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.enumeration.CampaignStatus
import br.com.catalisa.targest.enumeration.CategoryStatus
import br.com.catalisa.targest.enumeration.TicketTypeStatus
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.ticket.TicketType
import br.com.catalisa.targest.user.TargestUser

class CampaignAddService {

    public boolean save(TargestUser user, Store store, Campaign campaignToAdd){
        Campaign campaign = new Campaign()
        campaign.store = store
        campaign.name = campaignToAdd.name
        campaign.description = campaignToAdd.description
        campaign.creation = new Date()
        campaign.start = campaignToAdd.start
        campaign.end = campaignToAdd.end
        campaign.status = CampaignStatus.ACTIVE
        campaign.ticketType = campaignToAdd.ticketType
        campaign.categories = campaignToAdd.categories
        campaign.save(flush: true)
        return true
    }

    public List<TicketType> loadTicketTypes(TargestUser user, Store store){
        return TicketType.findAllByCompanyAndStatus(store.company, TicketTypeStatus.ACTIVE)
    }

    public List<Category> loadCategories(TargestUser user, Store store){
        return Category.findAllByCompanyAndStatus(store.company, CategoryStatus.ACTIVE)
    }

}
