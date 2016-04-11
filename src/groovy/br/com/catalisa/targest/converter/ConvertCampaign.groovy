package br.com.catalisa.targest.converter

import br.com.catalisa.targest.campaing.Campaign
import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.command.campaign.CampaignAddCommand
import br.com.catalisa.targest.dto.campaign.CampaignDto
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.ticket.TicketType

class ConvertCampaign {


    public static List<Campaign> domainInDtoList(Collection<Campaign> domains){
        List<CampaignDto> dtos = new ArrayList<CampaignDto>()
        domains.each { Campaign domain ->
            dtos.add(ConvertCampaign.domainInDto(domain))
        }
        return dtos
    }

    public static CampaignDto domainInDto(Campaign domain){
        CampaignDto dto = new CampaignDto()
        dto.idCripto = AES.encryptUrl(String.valueOf(domain.id))
        dto.startDate = domain.startDate
        dto.endDate = domain.endDate
        dto.ticketType = ConvertTicketType.domainInDto(domain.ticketType)
        dto.categories = ConvertCategory.domainInDtoList(domain.categories)
        dto.description = domain.description
        dto.name = domain.name
        dto.status = domain.status
        return dto
    }

    public static Campaign commandAddInDomain(CampaignAddCommand command){
        Campaign campaign = new Campaign()
        campaign.name = command.name
        campaign.description = command.description
        campaign.startDate = command.startDate
        campaign.endDate = command.endDate
        campaign.ticketType = TicketType.get(Long.valueOf(AES.decryptUrl(command.ticketTypeIdCripto as String)))

        List<Category> categories = new ArrayList<Category>()
        command.categoryIdsCripto.each { String categoryIdCripto ->
            categories.add(Category.get(AES.decryptUrl(categoryIdCripto as String)))
        }
        campaign.categories = categories
        return campaign
    }

}
