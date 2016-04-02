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

class CampaignListController {

    static responseFormats = ['json']

    CampaignListService campaignListService

    def load(){
        TargestUser userLogged = UserHelper.user
        Store store = Store.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        List<Campaign> campaigns = campaignListService.load(userLogged, store)
        respond campaigns: ConvertCampaign.domainInDtoList(campaigns)
    }

}
