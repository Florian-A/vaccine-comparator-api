import { Laboratory } from "../model/laboratory";
import { LaboratoryDAO as dao } from "../repository/laboritory.dao";

export class LaboratoryService {

    static persist(laboratory: Laboratory): Promise<any> {
        return new Promise(async function (resolve, reject) {
            try {
                const labo = new Laboratory(laboratory.name, laboratory.password)
                if (!labo.validate() === true) throw labo.validate()
                // if (laboratory._id !== null) {
                //     resolve(dao.edit(laboratory));
                // } else {
                resolve(dao.create(labo));
                // }
            } catch (err) {
                console.log(err)
                reject(err)
            }
        })
    }

    static getAll(): Promise<Array<Laboratory>> {
        return new Promise(async function (resolve, reject) {
            try {
                const laboratorys = await dao.getAll();     
                resolve(laboratorys)
            } catch (err) {
                reject(err)
            }
        })
    }

    static getById(id: number): Promise<Laboratory> {
        return new Promise(async function (resolve, reject) {
            try {
                const laboratory = await dao.getById(id);
                resolve(laboratory)
            } catch (err) {
                reject(err)
            }
        })
    }
}




