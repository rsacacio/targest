package br.com.catalisa.targest.enumeration

enum StoreStatus {

    ACTIVE(1), INACTIVE(2), PENDING(3)

    int id

    public StoreStatus(int id){
        this.id = id
    }

}
