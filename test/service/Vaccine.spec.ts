import { expect } from 'chai'
import * as assert from "assert"

import { Vaccine } from '../../src/model/vaccine'
import { VaccineService } from '../../src/service/vaccine.service'

describe("Test vaccine service database.", () => {

  it("Get BioNTech / Pfizer vaccine", () => {

    return VaccineService.getById(1).then(
      vaccine => {
        expect(vaccine.name).to.equal("BNT162b2")
      })
      .catch(e => {
        console.log(e)
        assert.fail(e)
      })
  })
})