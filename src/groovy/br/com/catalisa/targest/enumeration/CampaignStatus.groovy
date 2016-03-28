package br.com.catalisa.targest.enumeration

enum CampaignStatus {

    ACTIVE(1), INACTIVE(2), EXTENDED(3), FINALIZED(4), CANCELED(5)

    int id

    public CampaignStatus(int id){
        this.id = id
    }

}
