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

describe("post new vaccine.", async () => {

  it('should POST new vaccine', async function () {

    const vaccine = new Vaccine("test", "ARN", "vomis", new Date(), 50, "it's ok");
    const res = await VaccineService.persist(vaccine);
     
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an("object");
    expect(res.body.error).to.be.empty;
  });
  it('should GET vaccine', async function () {
    const res = await VaccineService.getById(4);
    res => {
      expect(res.name).to.equal("test")
    }
  });

})