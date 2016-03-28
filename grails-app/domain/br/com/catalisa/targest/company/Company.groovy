package br.com.catalisa.targest.company

import br.com.catalisa.targest.enumeration.CompanyStatus
import br.com.catalisa.targest.user.TargestUser

class Company {

    String name
    String description
    Date creation
    CompanyStatus status

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: true
        creation nullable: false
        status nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'company_id_seq']
        description type: 'text'
    }
}