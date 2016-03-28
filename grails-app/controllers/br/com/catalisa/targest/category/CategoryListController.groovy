package br.com.catalisa.targest.category

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.converter.ConvertCategory
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.user.TargestUser

class CategoryListController {

    static responseFormats = ['json']

    CategoryListService categoryListService

    def load(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))

        List<Category> categories = categoryListService.load(userLogged, company)
        respond categories: ConvertCategory.domainInDtoList(categories)
    }

}
