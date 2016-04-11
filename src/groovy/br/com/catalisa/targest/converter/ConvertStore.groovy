package br.com.catalisa.targest.converter

import br.com.catalisa.targest.dto.store.StoreDto
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.user.UserStore

class ConvertStore {

    public static List<StoreDto> domainInDtoList(Collection<Store> domains){
        List<StoreDto> dtos = new ArrayList<StoreDto>()
        domains.each { Store domain ->
            dtos.add(ConvertStore.domainInDto(domain))
        }
        return dtos
    }

    public static StoreDto domainInDto(Store domain){
        StoreDto dto = new StoreDto()
        dto.idCripto = AES.encryptUrl(String.valueOf(domain.id))
        dto.creation = domain.creation
        dto.description = domain.description
        dto.name = domain.name
        dto.status = domain.status
        dto.company = ConvertCompany.domainInDto(domain.company)
        return dto
    }

    public static StoreDto domainInDtoWithUsers(Store domain){
        StoreDto dto = ConvertStore.domainInDto(domain)
        dto.users = ConvertUserStore.domainInDtoList(UserStore.findAllByStore(domain))
        return dto
    }

}
