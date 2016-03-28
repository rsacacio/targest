package br.com.catalisa.targest.enumeration

enum CompanyStatus {

    ACTIVE(1), INACTIVE(2), PENDING(3)

    int id

    public CompanyStatus(int id){
        this.id = id
    }

}
