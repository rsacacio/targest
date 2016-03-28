package br.com.catalisa.targest.enumeration

enum UserStoreType {

    ADMINISTRATOR(1), SELLER(2)

    int id

    public UserStoreType(int id){
        this.id = id
    }

    static UserStoreType getById(int id) {
        values().find { it.id == id }
    }

}
