package br.com.catalisa.targest.store

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.ticket.TicketType
import br.com.catalisa.targest.user.TargestUser

class StoreListService {

    public List<Store> load(TargestUser user, Company company){
        return Store.findAllByCompany(company)
    }

}
