import br.com.catalisa.targest.campaing.Campaign
import br.com.catalisa.targest.category.Category
import br.com.catalisa.targest.company.Company
import br.com.catalisa.targest.enumeration.CampaignStatus
import br.com.catalisa.targest.enumeration.CategoryStatus
import br.com.catalisa.targest.enumeration.CompanyStatus
import br.com.catalisa.targest.enumeration.StoreStatus
import br.com.catalisa.targest.enumeration.TicketTypeStatus
import br.com.catalisa.targest.enumeration.UserCompanyStatus
import br.com.catalisa.targest.enumeration.UserCompanyType
import br.com.catalisa.targest.enumeration.UserStatus
import br.com.catalisa.targest.enumeration.UserStoreStatus
import br.com.catalisa.targest.enumeration.UserStoreType
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.ticket.TicketType
import br.com.catalisa.targest.user.TargestUser
import br.com.catalisa.targest.user.UserCompany
import br.com.catalisa.targest.user.UserStore

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

        Category category = new Category()
        category.name = "Esporte"
        category.description = "Categoria de esportes"
        category.status = CategoryStatus.ACTIVE
        category.creation = new Date()
        category.company = company
        category.save(flush: true, failOnErrorror: true)

        TicketType ticketType = new TicketType()
        ticketType.name = "Vale presente"
        ticketType.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis erat, sit amet dapibus tortor."
        ticketType.creation = new Date()
        ticketType.status = TicketTypeStatus.ACTIVE
        ticketType.company = company
        ticketType.save(flush: true, failOnError: true)

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

        Store store = new Store()
        store.company = company
        store.creation = new Date()
        store.name = "Centauro"
        store.status = StoreStatus.ACTIVE
        store.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis erat, sit amet dapibus tortor."
        store.save(flush: true, failOnError: true)

        UserStore userStore = new UserStore()
        userStore.status = UserStoreStatus.ACTIVE
        userStore.store = store
        userStore.type = UserStoreType.ADMINISTRATOR
        userStore.user = user
        userStore.save(flush: true, failOnError: true)

        Campaign campaign = new Campaign()
        campaign.creation = new Date()
        campaign.name = "Campanha de natal 2016"
        campaign.status = CampaignStatus.ACTIVE
        campaign.categories = [category]
        campaign.startDate = new Date()
        campaign.endDate = new Date()
        campaign.store = store
        campaign.ticketType = ticketType
        campaign.save(flush: true, failOnError: true)


        Category category1 = new Category()
        category1.name = "Moda feminina"
        category1.description = "Categoria que envolve a moda femina"
        category1.status = CategoryStatus.ACTIVE
        category1.creation = new Date()
        category1.company = company1
        category1.save(flush: true, failOnError: true)

        TicketType ticketType1 = new TicketType()
        ticketType1.name = "Vale presente"
        ticketType1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis erat, sit amet dapibus tortor."
        ticketType1.creation = new Date()
        ticketType1.status = TicketTypeStatus.ACTIVE
        ticketType1.company = company1
        ticketType1.save(flush: true, failOnError: true)

        UserCompany userCompany1 = new UserCompany()
        userCompany1.company = company1
        userCompany1.status = UserCompanyStatus.ACTIVE
        userCompany1.user = user
        userCompany1.type = UserCompanyType.ADMINISTRATOR
        userCompany1.save(flush: true, failOnError: true)

        Store store1 = new Store()
        store1.company = company1
        store1.creation = new Date()
        store1.name = "Renner"
        store1.status = StoreStatus.ACTIVE
        store1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis erat, sit amet dapibus tortor."
        store1.save(flush: true, failOnError: true)


        UserStore userStore1 = new UserStore()
        userStore1.status = UserStoreStatus.ACTIVE
        userStore1.store = store1
        userStore1.type = UserStoreType.ADMINISTRATOR
        userStore1.user = user
        userStore1.save(flush: true, failOnError: true)

        Campaign campaign1 = new Campaign()
        campaign1.creation = new Date()
        campaign1.name = "Campanha de natal 2016"
        campaign1.status = CampaignStatus.ACTIVE
        campaign1.categories = [category1]
        campaign1.startDate = new Date()
        campaign1.endDate = new Date()
        campaign1.store = store1
        campaign1.ticketType = ticketType1
        campaign1.save(flush: true, failOnError: true)


    }
    def destroy = {
    }
}
