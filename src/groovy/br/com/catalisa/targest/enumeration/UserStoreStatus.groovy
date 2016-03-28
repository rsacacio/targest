package br.com.catalisa.targest.enumeration

enum UserStoreStatus {

    ACTIVE(1), INACTIVE(2)

    int id

    public UserStoreStatus(int id){
        this.id = id
    }

}
