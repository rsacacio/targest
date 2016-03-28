package br.com.catalisa.targest.store

import br.com.catalisa.targest.command.store.StoreAddCommand
import br.com.catalisa.targest.command.ticket.TicketTypeAddCommand
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.converter.ConvertUserStoreType
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.ticket.TicketTypeAddService
import br.com.catalisa.targest.user.TargestUser

class StoreAddController {

    static responseFormats = ['json']

    StoreAddService storeAddService

    def save(StoreAddCommand command){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(command.idCripto as String)))

        boolean success = storeAddService.save(userLogged, company, command)
        respond success: success
    }

    def loadTypes(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))
        respond userStoreTypes: ConvertUserStoreType.domainInDtoList(storeAddService.loadTypes(userLogged, company))
    }

}
