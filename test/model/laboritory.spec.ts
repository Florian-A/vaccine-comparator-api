import { expect } from 'chai'
import { Laboratory } from '../../src/model/laboratory'

describe("Test laboritory model instance.", () => {
    it("New laboritory", () => {
      const labo = new Laboratory("Sanofi","123456")
        const validate = labo.validate()
        expect(validate).to.be.true
    })
})