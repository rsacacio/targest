package br.com.catalisa.targest.user

import br.com.catalisa.targest.enumeration.UserStoreStatus
import br.com.catalisa.targest.enumeration.UserStoreType
import br.com.catalisa.targest.store.Store

class UserStore {

    TargestUser user
    Store store
    UserStoreStatus status
    UserStoreType type

    static constraints = {
        user nullable: false
        store nullable: false
        status nullable: false
        type nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'user_store_id_seq']
    }

}
