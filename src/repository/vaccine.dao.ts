
import { Vaccine } from '../model/vaccine';
import { database } from '../service/database.service';

export class VaccineDAO {

    static getAll(limit: number = 10, offset: number = 0): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM vaccine LIMIT ${limit} OFFSET ${offset}`)
                .then((results: Array<any>) => {
                    resolve(results.map(
                        row => new Vaccine(row.name, row.typeOfVaccine, row.sideEffects, row.releaseDate, row.injection, row.stepValidation, row.id, row.laboratoryId)
                    ))
                })
                .catch(e => {
                    reject(e)
                })
        })
    }

    static getById(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM vaccine WHERE id = ${id}`)
                .then(row => {
                    resolve(
                        new Vaccine(row[0].name, row[0].typeOfVaccine, row[0].sideEffects, row[0].releaseDate, row[0].injection, row[0].stepValidation, row[0].id, row[0].laboratoryId)
                    )
                }).catch(e => {
                    reject(e)
                })
        })
    }

    static create(vaccine: Vaccine): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`
            INSERT INTO vaccine (name,typeOfVaccine,sideEffects,releaseDate,injection,stepValidation,laboratoryId) 
            VALUES ('${vaccine.name}', '${vaccine.typeOfVaccine}', '${vaccine.sideEffects}', '${vaccine.releaseDate.toISOString().slice(0, 19).replace('T', ' ')}', ${vaccine.injection}, '${vaccine.stepValidation}',${vaccine.laboratoryId});            
            `).then((result: any) => {
                resolve(result)
            }).catch(e => {
                console.log(e)
                reject(e)
            })
        })
    }

    static edit(vaccine: Vaccine): Promise<any> {
        return new Promise((resolve, reject) => {
            database.query(`UPDATE vaccine SET name = ${vaccine.name} WHERE id = ${vaccine._id}`)
                .then((result: any) => {
                    resolve(result)
                }).catch(e => {
                    reject(e)
                })
        })
    }
}
