package br.com.catalisa.targest.campaign

import br.com.catalisa.targest.campaing.Campaign
import br.com.catalisa.targest.store.Store
import br.com.catalisa.targest.user.TargestUser

class CampaignListService {

    public List<Campaign> load(TargestUser user, Store store){
        return Campaign.findAllByStore(store)
    }

}
