package br.com.catalisa.targest.category

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.CategoryStatus

class Category {

    String name
    String description
    Date creation
    CategoryStatus status
    Company company

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: true
        creation nullable: false
        status nullable: false
        company nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'category_id_seq']
        description type: 'text'
    }


}
