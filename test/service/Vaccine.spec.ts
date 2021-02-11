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

describe("get all vaccine.", async () => {

  it("Get 3 vaccines ", () => {

    return VaccineService.getAll().then(

      vaccine => {

        let count: number = 0;
        for (const iterator of vaccine) {
          count++;
        }
        expect(vaccine).to.be.an('array');
        expect(count).to.be.equal(3);

      })
      .catch(e => {
        console.log(e)
        assert.fail(e)
      })
  })
})

describe("Create a new vaccine.", async () => {

  it('Should new vaccine', async function () {

    let vaccine = new Vaccine("TestName", "TestType", "SideEffect", new Date(Date.now()), 99, "V");
    const result = await VaccineService.persist(vaccine);
    vaccine = await VaccineService.getById(result.insertId)
    expect(vaccine).to.be.instanceOf(Vaccine);
    expect(vaccine).not.to.be.empty;
    expect(vaccine._id).to.equal(result.insertId)
    expect(vaccine.name).to.equal("TestName")
  });
})