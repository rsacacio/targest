package br.com.catalisa.targest.enumeration

enum TicketStatus {

    REACHED(1), CLICKED(2), USED(3), EXPIRED(4)

    int id

    public TicketStatus(int id){
        this.id = id
    }

}
