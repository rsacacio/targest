dataSource {
    pooled = true
    jmxExport = true
    driverClassName = "org.h2.Driver"
    username = "sa"
    password = ""
}
hibernate {
    cache.use_second_level_cache = false
    cache.use_query_cache = false
    //    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory' // Hibernate 3
    cache.region.factory_class = 'org.hibernate.cache.ehcache.EhCacheRegionFactory' // Hibernate 4
//	cache.region.factory_class = 'net.sf.ehcache.hibernate.SingletonEhCacheRegionFactory'
    singleSession = true // configure OSIV singleSession mode
    flush.mode = 'manual' // OSIV session flush mode outside of transactional context
}

// environment specific settings
environments {
    development {
        dataSource {
            dbCreate = "create-drop"
//			dbCreate = "validate"
            //url = "jdbc:postgresql://localhost:5432/fluidoc-mirror"
            url = "jdbc:postgresql://localhost:5432/targest"
            driverClassName = "org.postgresql.Driver"
            username = "postgres"
            password = "senha1"
            logSql = true
        }
    }
    test {
        dataSource {
            dbCreate = "update"
            url = "jdbc:h2:mem:testDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE"
            logSql = true
        }
    }
    UAT {
        dataSource {
//			dbCreate = "validate"
            url = "jdbc:postgresql://192.168.200.133:5432/fluidoc-NKC-779"
            driverClassName = "org.postgresql.Driver"
            username = "postgres"
            password = "senha1"
            logSql = true
        }
    }
    demo {
        dataSource {
            url = "jdbc:postgresql://12121212:5432/fluidoc-homologacao"
            driverClassName = "org.postgresql.Driver"
            username = "postgres"
            password = "admin"
            logSql = true
        }
    }
    production {
        dataSource {
            dbCreate = 'create-drop'
            driverClassName = "org.postgresql.Driver"
            dialect = org.hibernate.dialect.PostgreSQLDialect
            uri = new URI(System.env.DATABASE_URL?:"postgres://ibhdkpybeyhouv:-c490PXFcikEy-GyQIr8PZJIJ7@ec2-54-221-249-201.compute-1.amazonaws.com:5432/d7ig2h3mbabf50")
            url = "jdbc:postgresql://"+uri.host+uri.path
            username = uri.userInfo.split(":")[0]
            password = uri.userInfo.split(":")[1]
        }
    }
}
