package br.com.catalisa.targest

import br.com.catalisa.targest.enumeration.UserStatus
import br.com.catalisa.targest.user.TargestUser
import grails.plugin.springsecurity.SpringSecurityUtils
import grails.transaction.Transactional
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException

@Transactional
class MyUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String name)
            throws UsernameNotFoundException {

        TargestUser user = TargestUser.findByEmail(name)

        boolean enabled = user.status != UserStatus.PENDING;
        boolean accountNonExpired = true;
        boolean credentialsNonExpired = true;
        boolean accountNonLocked = !(user.status == UserStatus.INACTIVE);

        return new User(user.email, user.password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked,
                [new SimpleGrantedAuthority(SpringSecurityUtils.NO_ROLE)]);
    }
}
