package br.com.catalisa.targest.dto.store

import br.com.catalisa.targest.dto.company.CompanyDto
import br.com.catalisa.targest.dto.user.UserDto
import br.com.catalisa.targest.dto.user.UserStoreDto
import br.com.catalisa.targest.enumeration.StoreStatus

class StoreDto {

    String idCripto
    String name
    String description
    Date creation
    CompanyDto company
    StoreStatus status
    List<UserStoreDto> users

}
