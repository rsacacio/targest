package br.com.catalisa.targest.dto.campaign

import br.com.catalisa.targest.dto.category.CategoryDto
import br.com.catalisa.targest.dto.ticket.TicketTypeDto
import br.com.catalisa.targest.enumeration.CampaignStatus

class CampaignDto {

    String idCripto
    String name
    String description
    Date startDate
    Date endDate
    CampaignStatus status
    TicketTypeDto ticketType
    List<CategoryDto> categories

}
