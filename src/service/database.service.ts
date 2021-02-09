import { databaseConfig } from './ DatabaseConfig.service'

class DatabaseService {

    connection: any;

    constructor(config: any) {

        this.initDatabase(config);
        this.testConnection();

    }
    private initDatabase(config: any): void {

        const mysql = require('mysql');
        this.connection = mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database,
        });
    }

    private testConnection(): void {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected with database !');
        });
    }

    public query(queryString: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

}

export const database = new DatabaseService(databaseConfig)