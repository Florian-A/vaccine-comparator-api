import { Vaccine } from "../model/vaccine";
import { VaccineDAO as dao } from "../repository/vaccine.dao";

export class VaccineService {

    static persist(vax: Vaccine): Promise<any> {
        return new Promise(async function (resolve, reject) {
            try {
                const vaccine = new Vaccine(vax.name, vax.typeOfVaccine, vax.sideEffects, vax.releaseDate, vax.injection, vax.stepValidation, vax._id, vax.laboratoryId)
                if (!vaccine.validate() === true) throw vaccine.validate()
                if (vaccine._id !== null) {
                    resolve(dao.edit(vaccine));
                } else {
                    resolve(dao.create(vaccine));
                }
            } catch (err) {
                console.log(err)
                reject(err)
            }
        })
    }

    static getAll(): Promise<Array<Vaccine>> {
        return new Promise(async function (resolve, reject) {
            try {
                const vaccines = await dao.getAll();
                resolve(vaccines)
            } catch (err) {
                reject(err)
            }
        })
    }

    static getById(id: number): Promise<Vaccine> {
        return new Promise(async function (resolve, reject) {
            try {
                const vaccine = await dao.getById(id);
                resolve(vaccine)
            } catch (err) {
                reject(err)
            }
        })
    }
}
