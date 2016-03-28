package br.com.catalisa.targest.category

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.CategoryStatus
import br.com.catalisa.targest.user.TargestUser

class CategoryAddService {

    public boolean save(TargestUser user, Company company, String name, String description){
        Category category = new Category()
        category.name = name
        category.description = description
        category.status = CategoryStatus.ACTIVE
        category.creation = new Date()
        category.company = company
        category.save(flush: true, failOnError: true)

        return true
    }

}
