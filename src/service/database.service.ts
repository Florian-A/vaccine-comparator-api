class databaseConnector {
    connection: any;
    mysql: any;
    config: any;

    constructor(config: any) {
        this.mysql = require('mysql');
        this.initDatabase(config)
    }
    public initDatabase(config: any): void {
        this.connection = this.mysql.createConnection(config);
    }
    
    public testConnection() {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
          });
    }

}

const databaseConfig = new databaseConfig();
const database = new databaseConnector(databaseConfig);
