package br.com.catalisa.targest.profile

import br.com.catalisa.targest.converter.ConvertUser
import br.com.catalisa.targest.helper.UserHelper
import br.com.catalisa.targest.user.TargestUser

class ProfileEditController {

    static responseFormats = ['json']

    ProfileEditService profileEditService

    def load(){
        TargestUser userLogged = UserHelper.user
        respond user: ConvertUser.domainInDto(userLogged)
    }
}
