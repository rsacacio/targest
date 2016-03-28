package br.com.catalisa.targest.ticket

import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.user.TargestUser

class TicketTypeListService {

    public List<TicketType> load(TargestUser user, Company company){
        return TicketType.findAllByCompany(company)
    }

}
