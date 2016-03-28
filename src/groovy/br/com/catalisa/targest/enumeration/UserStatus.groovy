package br.com.catalisa.targest.enumeration

enum UserStatus {

    ACTIVE(1), INACTIVE(2), PENDING(3)

    int id

    public UserStatus(int id){
        this.id = id
    }

}
