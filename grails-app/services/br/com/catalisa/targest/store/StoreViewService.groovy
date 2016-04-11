package br.com.catalisa.targest.store

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.StoreStatus
import br.com.catalisa.targest.user.TargestUser

class StoreViewService {

    public Store load(TargestUser user, Company company, Long storeId){
        return Store.get(storeId)
    }

    public boolean unlock(TargestUser user, Company company, Long storeId){
        Store store = Store.get(storeId)
        store.status = StoreStatus.ACTIVE
        store.save(flush: true)
        return true
    }

    public boolean lock(TargestUser user, Company company, Long storeId){
        Store store = Store.get(storeId)
        store.status = StoreStatus.INACTIVE
        store.save(flush: true)
        return true
    }

}
