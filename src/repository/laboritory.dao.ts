
import { Laboratory } from '../model/laboratory';
import { database } from '../service/database.service';

export class LaboratoryDAO {
    static getAll(limit: number = 10, offset: number = 0): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM laboratory LIMIT ${limit} OFFSET ${offset}`)
                .then((results: Array<any>) => {
                    resolve(results.map(
                        row => new Laboratory(row.name, row.password, row._id)
                    ))
                })
                .catch(e => {
                    reject(e)
                })
        })
    }
    static getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM laboratory WHERE id = ${id}`)
                .then(row => {
                    resolve(
                        new Laboratory(row[0].name, row[0].password, row._id)
                    )
                }).catch(e => {
                    reject(e)
                })
        })
    }
    static create(laboratory: any): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`
                INSERT INTO laboratory (name,password) 
                VALUES ('${laboratory.name}', '${laboratory.password}');`)
                .then((result: any) => {
                    resolve(result)
                }).catch(e => {
                    console.log(e)
                    reject(e)
                })
        })
    }
}