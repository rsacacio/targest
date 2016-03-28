package br.com.catalisa.targest.category

import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.user.TargestUser

class CategoryListService {

    public List<Category> load(TargestUser user, Company company){
        return Category.findAllByCompany(company)
    }

}
