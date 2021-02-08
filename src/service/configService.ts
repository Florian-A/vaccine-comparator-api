class ConfigService {
    // valeur par defaut

    private database: string = "@test";
    private user: string = "@test";
    private password: string = "@test";
    

    initDatabase(){
        return this.database;

    }


}

export const configs = new ConfigService;