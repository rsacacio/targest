package br.com.catalisa.targest.converter

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.dto.category.CategoryDto
import br.com.catalisa.targest.dto.ticket.TicketTypeDto
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.ticket.TicketType

class ConvertTicketType {


    public static List<TicketType> domainInDtoList(Collection<TicketType> domains){
        List<TicketTypeDto> dtos = new ArrayList<TicketTypeDto>()
        domains.each { TicketType domain ->
            dtos.add(ConvertTicketType.domainInDto(domain))
        }
        return dtos
    }

    public static TicketTypeDto domainInDto(TicketType domain){
        TicketTypeDto dto = new TicketTypeDto()
        dto.idCripto = AES.encryptUrl(String.valueOf(domain.id))
        dto.creation = domain.creation
        dto.description = domain.description
        dto.name = domain.name
        dto.status = domain.status
        return dto
    }

}
