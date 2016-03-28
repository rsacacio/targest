import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.CompanyStatus
import br.com.catalisa.targest.enumeration.UserCompanyStatus
import br.com.catalisa.targest.enumeration.UserCompanyType
import br.com.catalisa.targest.enumeration.UserStatus
import br.com.catalisa.targest.user.TargestUser
import br.com.catalisa.targest.user.UserCompany

class BootStrap {

    def init = { servletContext ->

        TargestUser user = new TargestUser()
        user.creation = new Date()
        user.name = "Rangel"
        user.email = "rs.acacio@gmail.com"
        user.password = "teste".encodeAsSHA256()
        user.phone = "121212"
        user.status =  UserStatus.ACTIVE
        user.save(flush: true, failOnError: true)

        Company company = new Company()
        company.name = "Iguatemi Floripa"
        company.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis erat, sit amet dapibus tortor."
        company.status = CompanyStatus.ACTIVE
        company.creation = new Date()
        company.save(flush: true, failOnError: true)

//        Category category = new Category()
//        category.name = "Esporte"
//        category.description = "Categoria de esportes"
//        category.status = CategoryStatus.ACTIVE
//        category.creation = new Date()
//        category.company = company
//        category.save(flush: true, failOnError: true)

        UserCompany userCompany = new UserCompany()
        userCompany.company = company
        userCompany.status = UserCompanyStatus.ACTIVE
        userCompany.user = user
        userCompany.type = UserCompanyType.ADMINISTRATOR
        userCompany.save(flush: true, failOnError: true)

        Company company1 = new Company()
        company1.name = "Iguatemi São Paulo"
        company1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis erat, sit amet dapibus tortor."
        company1.status = CompanyStatus.ACTIVE
        company1.creation = new Date()
        company1.save(flush: true, failOnError: true)

//        Category category1 = new Category()
//        category1.name = "Moda feminina"
//        category1.description = "Categoria que envolve a moda femina"
//        category1.status = CategoryStatus.ACTIVE
//        category1.creation = new Date()
//        category1.company = company1
//        category1.save(flush: true, failOnError: true)

        UserCompany userCompany1 = new UserCompany()
        userCompany1.company = company
        userCompany1.status = UserCompanyStatus.ACTIVE
        userCompany1.user = user
        userCompany1.type = UserCompanyType.ADMINISTRATOR
        userCompany1.save(flush: true, failOnError: true)


    }
    def destroy = {
    }
}
