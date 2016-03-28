package br.com.catalisa.targest.choose

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.converter.ConvertCompany
import br.com.catalisa.targest.converter.ConvertStore
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.user.TargestUser

class ChooseController {

    static responseFormats = ['json']

    ChooseService chooseService

    def load(){
        TargestUser userLogged = UserHelper.user
        List<Company> companies = chooseService.loadCompanies(userLogged)
        List<Store> stores = chooseService.loadStores(userLogged)

        respond companies: ConvertCompany.domainInDtoList(companies), stores: ConvertStore.domainInDtoList(stores)
    }

}
