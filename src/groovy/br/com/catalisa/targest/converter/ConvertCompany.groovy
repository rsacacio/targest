package br.com.catalisa.targest.converter

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.dto.company.CompanyDto
import br.com.catalisa.targest.encode.AES

class ConvertCompany {


    public static List<CompanyDto> domainInDtoList(Collection<Company> domains){
        List<CompanyDto> dtos = new ArrayList<CompanyDto>()
        domains.each { Company domain ->
            dtos.add(ConvertCompany.domainInDto(domain))
        }
        return dtos
    }

    public static CompanyDto domainInDto(Company domain){
        CompanyDto dto = new CompanyDto()
        dto.idCripto = AES.encryptUrl(String.valueOf(domain.id))
        dto.creation = domain.creation
        dto.description = domain.description
        dto.name = domain.name
        dto.status = domain.status
        return dto
    }

}
