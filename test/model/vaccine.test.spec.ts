import { expect } from 'chai'
import * as assert from "assert"

import { Vaccine } from '../../src/model/vaccine'

describe("Test vaccine model instance.", () => {

    it("new vaccine", () => {
        const vaccine = new Vaccine("H1N1", "vecteur viral", "rougeurs", new Date(), 10000, 'III',1,1)
        const test = vaccine.validate()
        expect(test).to.be.true
    })
    
})