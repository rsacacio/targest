package br.com.catalisa.targest.store

import br.com.catalisa.targest.command.store.StoreAddCommand
import br.com.catalisa.targest.command.store.StoreAddUserAddCommand
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.StoreStatus
import br.com.catalisa.targest.enumeration.UserStatus
import br.com.catalisa.targest.enumeration.UserStoreStatus
import br.com.catalisa.targest.enumeration.UserStoreType
import br.com.catalisa.targest.user.TargestUser
import br.com.catalisa.targest.user.UserStore

class StoreAddService {

    public boolean save(TargestUser user, Company company, StoreAddCommand command){
        Store store = new Store()
        store.name = command.name
        store.description = command.description
        store.creation = new Date()
        store.status = StoreStatus.ACTIVE
        store.company = company
        store.save(flush: true, failOnError: true)

        command.users.each { StoreAddUserAddCommand userCommand ->
            TargestUser userToCreate = TargestUser.findByEmail(userCommand.email)
            if(!userToCreate){
                userToCreate = new TargestUser()
                userToCreate.email = userCommand.email
                userToCreate.name = userCommand.email
                userToCreate.status = UserStatus.PENDING
                userToCreate.creation = new Date()

                String password = generator( (('A'..'Z')+('0'..'9')).join(), 9 )
                println password
                userToCreate.password = password.encodeAsSHA256()
                userToCreate.save(flush: true, failOnError: true)
            }

            UserStore userStore = new UserStore()
            userStore.user = userToCreate
            userStore.type = UserStoreType.getById(userCommand.typeId)
            userStore.store = store
            userStore.status = UserStoreStatus.ACTIVE
            userStore.save(flush: true, failOnError: true)
        }
        return true
    }

    def generator = { String alphabet, int n ->
        new Random().with {
            (1..n).collect { alphabet[ nextInt( alphabet.length() ) ] }.join()
        }
    }

    public List<UserStoreType> loadTypes(TargestUser user, Company company){
        return UserStoreType.values()
    }
}