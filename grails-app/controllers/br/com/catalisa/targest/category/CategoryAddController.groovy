package br.com.catalisa.targest.category

import br.com.catalisa.targest.command.category.CategoryAddCommand
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.user.TargestUser

class CategoryAddController {

    static responseFormats = ['json']

    CategoryAddService categoryAddService

    def save(CategoryAddCommand command){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(command.idCripto as String)))
        boolean success = categoryAddService.save(userLogged, company, command.name, command.description)
        respond success: success
    }

}
