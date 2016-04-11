package br.com.catalisa.targest.dto.user

import br.com.catalisa.targest.dto.category.CategoryDto
import br.com.catalisa.targest.enumeration.UserStatus
import br.com.catalisa.targest.enumeration.UserStoreStatus
import br.com.catalisa.targest.enumeration.UserStoreType

class UserStoreDto {

    long id
    UserDto user
    UserStoreStatus status
    UserStoreType type

}
