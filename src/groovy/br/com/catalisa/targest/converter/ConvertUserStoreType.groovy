package br.com.catalisa.targest.converter

import br.com.catalisa.targest.dto.store.UserStoreTypeDto
import br.com.catalisa.targest.enumeration.UserStoreType

class ConvertUserStoreType {

    public static List<UserStoreTypeDto> domainInDtoList(Collection<UserStoreType> domains){
        List<UserStoreTypeDto> dtos = new ArrayList<UserStoreTypeDto>()
        domains.each { UserStoreType domain ->
            dtos.add(ConvertUserStoreType.domainInDto(domain))
        }
        return dtos
    }

    public static UserStoreTypeDto domainInDto(UserStoreType domain){
        UserStoreTypeDto dto = new UserStoreTypeDto()
        dto.id = domain.id
        dto.name = domain.name()
        return dto
    }

}
