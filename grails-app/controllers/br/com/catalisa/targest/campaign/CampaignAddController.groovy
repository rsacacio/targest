package br.com.catalisa.targest.campaign

import br.com.catalisa.targest.campaing.Campaign
import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.command.campaign.CampaignAddCommand
import br.com.catalisa.targest.converter.ConvertCampaign
import br.com.catalisa.targest.converter.ConvertCategory
import br.com.catalisa.targest.converter.ConvertTicketType
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.ticket.TicketType
import br.com.catalisa.targest.user.TargestUser

class CampaignAddController {

    static responseFormats = ['json']

    CampaignAddService campaignAddService

    def save(CampaignAddCommand command){
        TargestUser userLogged = UserHelper.user
        Store store = Store.get(Long.valueOf(AES.decryptUrl(command.idCripto as String)))
        Campaign campaignToAdd = ConvertCampaign.commandAddInDomain(command)

        boolean success = campaignAddService.save(userLogged, store, campaignToAdd)
        respond success : success
    }

    def loadTicketTypes(){
        TargestUser userLogged = UserHelper.user
        Store store = Store.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        List<TicketType> ticketTypes = campaignAddService.loadTicketTypes(userLogged, store)
        respond ticketTypes : ConvertTicketType.domainInDtoList(ticketTypes)
    }

    def loadCategories(){
        TargestUser userLogged = UserHelper.user
        Store store = Store.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        List<Category> categories = campaignAddService.loadCategories(userLogged, store)
        respond categories : ConvertCategory.domainInDtoList(categories)
    }

}
