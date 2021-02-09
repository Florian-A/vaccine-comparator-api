
import { Vaccine } from '../entity/vaccine';
import { database } from '../service/database.service';

export class VaccineDAO {

    static getAll(limit: number = 10, offset: number = 0): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM vaccine LIMIT ${limit} OFFSET ${offset}`)
                .then((results: Array<any>) => {
                    resolve(results.map(row => new Vaccine(row)))
                })
                .catch(e => {
                    reject(e)
                })
        })
    }

    static getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM vaccine WHERE id = ${id}`)
                .then((results: Array<any>) => {
                    resolve(result => new Vaccine(result))
                }).catch(e => {
                    reject(e)
                })
        })
    }

    static create(vaccine: Vaccine): Promise<any> {
        return new Promise((resolve, reject) => {

            database.query(`INSERT INTO vaccine VALUES (${vaccine.name})`)
                .then((result: any) => {
                    console.log(result)
                }).catch(e => {
                    reject(e)
                })
        })
    }

    static edit(vaccine: Vaccine): Promise<any> {
        return new Promise((resolve, reject) => {

            database.query(`UPDATE vaccine SET name = ${vaccine.name} WHERE id = ${vaccine.id}`)
                .then((result: any) => {
                    console.log(result)
                }).catch(e => {
                    reject(e)
                })
        })
    }
}