package br.com.catalisa.targest.store

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.converter.ConvertStore
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.user.TargestUser

class StoreViewController {

    static responseFormats = ['json']

    StoreViewService storeViewService

    def load(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        Long storeId = Long.valueOf(AES.decryptUrl(params.storeId as String))

        Store store = storeViewService.load(userLogged, company, storeId)
        respond store: ConvertStore.domainInDtoWithUsers(store)
    }

    def unlock(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        Long storeId = Long.valueOf(AES.decryptUrl(params.storeId as String))

        boolean success = storeViewService.unlock(userLogged, company, storeId)
        respond success: success
    }

    def lock(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        Long storeId = Long.valueOf(AES.decryptUrl(params.storeId as String))

        boolean success = storeViewService.lock(userLogged, company, storeId)
        respond success: success
    }

}
