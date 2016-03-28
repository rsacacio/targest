package br.com.catalisa.targest.user

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.enumeration.UserStatus

class TargestUser {

    String name
    String phone
    String password
    String email
    Date creation
    Date birthDate
    UserStatus status

    static hasMany = [categories: Category]

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        phone nullable: true, maxSize: 15, minSize: 2
        password nullable: false, maxSize: 255
        email nullable: false, maxSize: 400
        creation nullable: false, maxSize: 30
        status nullable: false
        birthDate nullable: true
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'user_id_seq']
    }

}
