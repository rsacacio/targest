package br.com.catalisa.targest.user

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.UserCompanyStatus
import br.com.catalisa.targest.enumeration.UserCompanyType

class UserCompany {

    TargestUser user
    Company company
    UserCompanyStatus status
    UserCompanyType type

    static constraints = {
        user nullable: false
        company nullable: false
        status nullable: false
        type nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'user_company_id_seq']
    }

}
