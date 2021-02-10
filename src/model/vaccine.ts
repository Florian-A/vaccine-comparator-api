import AJV from 'ajv'

const ajv = new AJV({
    allErrors: true,
});

export interface Vaccine {
    name: string
    typeOfVaccine?: string
    sideEffects?: string
    releaseDate?: Date
    injection?: number
    stepValidation?: string
    _id?: number
    laboratoryId?: number
    schema?: Object
}

export class Vaccine {
    constructor(
        name: string,
        typeOfVaccine: string = null,
        sideEffects: string = null,
        releaseDate: Date = null,
        injection: number = null,
        stepValidation: string = null,
        _id: number = null,
        laboratoryId: number = null) {
        this.name = name
        this.typeOfVaccine = typeOfVaccine
        this.sideEffects = sideEffects
        this.releaseDate = releaseDate
        this.injection = injection
        this.stepValidation = stepValidation
        this._id = _id
        this.laboratoryId = laboratoryId
    }
    validate() {
        return (ajv.validate(schema, this)) ? true : ajv.errors
    }
}

const schema = {
    type: 'object',
    required: ['name'],
    properties: {
        name: { type: "string", minLength: 2, maxLength: 255 },
        typeOfVaccine: { type: "string" },
        sideEffects: { type: "string" },
        releaseDate: { type: "date" },
        injection: { type: "number" },
        stepValidation: { type: "string" },
        _id: { type: "number" },
        laboratoryId: { type: "number" }
    }
}