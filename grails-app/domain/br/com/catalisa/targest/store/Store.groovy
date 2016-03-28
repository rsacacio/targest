package br.com.catalisa.targest.store

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.StoreStatus

class Store {

    String name
    String description
    Date creation
    Company company
    StoreStatus status

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: true
        creation nullable: false
        company nullable: false
        status nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'store_id_seq']
        description type: 'text'
    }

}
