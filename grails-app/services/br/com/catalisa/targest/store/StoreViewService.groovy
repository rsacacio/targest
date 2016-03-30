package br.com.catalisa.targest.store

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.user.TargestUser

class StoreViewService {

    public Store load(TargestUser user, Company company, Long storeId){
        return Store.get(storeId)
    }

}
