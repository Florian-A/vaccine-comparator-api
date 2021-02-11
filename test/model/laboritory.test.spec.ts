import { expect } from 'chai'
import * as assert from "assert"

import { Laboratory } from '../../src/model/laboratory'

describe("Test vaccine model instance.", () => {

    it("new vaccine", () => {
      let labo= new Laboratory("Garnier","123456")
        const test = labo.validate()
        expect(test).to.be.true
    })
})