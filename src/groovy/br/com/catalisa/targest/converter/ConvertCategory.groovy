package br.com.catalisa.targest.converter

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.dto.category.CategoryDto
import br.com.catalisa.targest.encode.AES

class ConvertCategory {


    public static List<Category> domainInDtoList(Collection<Category> domains){
        List<CategoryDto> dtos = new ArrayList<CategoryDto>()
        domains.each { Category domain ->
            dtos.add(ConvertCategory.domainInDto(domain))
        }
        return dtos
    }

    public static CategoryDto domainInDto(Category domain){
        CategoryDto dto = new CategoryDto()
        dto.idCripto = AES.encryptUrl(String.valueOf(domain.id))
        dto.creation = domain.creation
        dto.description = domain.description
        dto.name = domain.name
        dto.status = domain.status
        return dto
    }

}
