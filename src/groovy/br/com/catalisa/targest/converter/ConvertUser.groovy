package br.com.catalisa.targest.converter

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.dto.category.CategoryDto
import br.com.catalisa.targest.dto.user.UserDto
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.user.TargestUser

class ConvertUser {


    public static List<UserDto> domainInDtoList(Collection<TargestUser> domains){
        List<UserDto> dtos = new ArrayList<UserDto>()
        domains.each { TargestUser domain ->
            dtos.add(ConvertUser.domainInDto(domain))
        }
        return dtos
    }

    public static UserDto domainInDto(TargestUser domain){
        UserDto dto = new UserDto()
        dto.id = domain.id
        dto.name = domain.name
        dto.email = domain.email
        dto.phone = domain.phone
        dto.birthDate = domain.birthDate
        dto.creation = domain.creation
        dto.status = domain.status
        dto.categories = ConvertCategory.domainInDtoList(domain.categories)
        return dto
    }

}
