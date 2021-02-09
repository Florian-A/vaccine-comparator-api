export interface Laboratory {
    _id: number
    name: string
    password: string
    schema?: object
}

const Ajv = require('ajv');
const ajv = Ajv({ allErrors: true });

export class Laboratory {
    constructor(
        _id: number = null,
        name: string,
        password: string,
    ) {
        this._id = _id
        this.name = name
        this.password = password
    }
    
    validate() {
        return (ajv.validate(schema, this)) ? true : ajv.errors
    }
}

const schema = {
    type: 'object',
    required: ['name', 'password'],
    properties: {
        _id: { type: "number" },
        name: { type: "string", minLength: 2, maxLength: 255 },
        password: { type: "string", minLength: 2, maxLength: 16 },
    }
}