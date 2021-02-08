class DatabaseConfigService {

    public host: string = process.env.DB_HOST;
    public port: string = process.env.DB_PORT;
    public user: string = process.env.DB_USER;
    public password: string = process.env.DB_PASS;
    public database: string = process.env.DB_NAME;
}

export const databaseConfig = new DatabaseConfigService()