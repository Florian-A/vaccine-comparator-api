import AJV from 'ajv'

const ajv = new AJV({
    allErrors: true,
  });
  
export interface Vaccine {
    name: string
    sideEffects: string
    releaseDate: Date
    _id?: number
    laboratory?: number
    schema?: Object
}

export class Vaccine {
    constructor(
        name: string,
        sideEffects: string,
        releaseDate: Date,
        _id: number = null,
        laboratory: number = null) {
        this._id = _id
        this.name = name
        this.sideEffects = sideEffects
        this.releaseDate = releaseDate
        this.laboratory = laboratory
    }
    validate() {
        return (ajv.validate(schema, this)) ? true : ajv.errors
    }
}

const schema = {
    type: 'object',
    required: ['name', 'sideEffects', 'releaseDate'],
    properties: {
        name: { type: "string", minLength: 2, maxLength: 255 },
        sideEffects: { type: "string" },
        releaseDate: { type: "date" },
        _id: { type: "number" },
        laboratory: { type: "number" }
    }
}