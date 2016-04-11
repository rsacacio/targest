package br.com.catalisa.targest.converter

import br.com.catalisa.targest.dto.user.UserDto
import br.com.catalisa.targest.dto.user.UserStoreDto
import br.com.catalisa.targest.user.TargestUser
import br.com.catalisa.targest.user.UserStore

class ConvertUserStore {


    public static List<UserStoreDto> domainInDtoList(Collection<UserStore> domains){
        List<UserStoreDto> dtos = new ArrayList<UserStoreDto>()
        domains.each { UserStore domain ->
            dtos.add(ConvertUserStore.domainInDto(domain))
        }
        return dtos
    }

    public static UserStoreDto domainInDto(UserStore domain){
        UserStoreDto dto = new UserStoreDto()
        dto.id = domain.id
        dto.user = ConvertUser.domainInDto(domain.user)
        dto.status = domain.status
        dto.type = domain.type
        return dto
    }

}
