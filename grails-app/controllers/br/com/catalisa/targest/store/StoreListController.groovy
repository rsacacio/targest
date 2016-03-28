package br.com.catalisa.targest.store

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.converter.ConvertStore
import br.com.catalisa.targest.converter.ConvertTicketType
import br.com.catalisa.targest.dto.store.StoreDto
import br.com.catalisa.targest.encode.AES
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.ticket.TicketType
import br.com.catalisa.targest.ticket.TicketTypeListService
import br.com.catalisa.targest.user.TargestUser

class StoreListController {

    static responseFormats = ['json']

    StoreListService storeListService

    def load(){
        TargestUser userLogged = UserHelper.user
        Company company = Company.get(Long.valueOf(AES.decryptUrl(params.idCripto as String)))

        List<StoreDto> storeDto = storeListService.load(userLogged, company)
        respond stores: ConvertStore.domainInDtoList(storeDto)
    }

}
