package br.com.catalisa.targest.choose

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.CompanyStatus
import br.com.catalisa.targest.enumeration.UserCompanyStatus
import br.com.catalisa.targest.enumeration.UserStoreStatus
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.user.TargestUser
import br.com.catalisa.targest.user.UserCompany
import br.com.catalisa.targest.user.UserStore

class ChooseService {


    public List<Company> loadCompanies(TargestUser user){
        return UserCompany.findAllByUserAndStatus(user, UserCompanyStatus.ACTIVE)*.company
    }

    public List<Store> loadStores(TargestUser user){
        return UserStore.findAllByUserAndStatus(user, UserStoreStatus.ACTIVE)*.store
    }

}
