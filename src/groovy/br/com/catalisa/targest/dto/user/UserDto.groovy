package br.com.catalisa.targest.dto.user

import br.com.catalisa.targest.dto.category.CategoryDto
import br.com.catalisa.targest.enumeration.UserStatus

class UserDto {

    long id
    String name
    String phone
    String email
    Date creation
    Date birthDate
    UserStatus status
    List<CategoryDto> categories

}
