import { expect } from 'chai'
import { Vaccine } from '../../src/model/vaccine'

describe("Test vaccine model instance.", () => {
    it("New vaccine", () => {
        const vaccine = new Vaccine("H1N1", "Vecteur viral", "Rougeurs", new Date(), 10000, 'III',1,1)
        const validate = vaccine.validate()
        expect(validate).to.be.true
    })
})