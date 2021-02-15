import AJV from 'ajv'

const ajv = new AJV({
    allErrors: true,
});

export interface Laboratory {
    _id?: number
    name: string
    password: string
    schema?: object
}

export class Laboratory {
    constructor(
        name: string,
        password: string,
        _id: number = null
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
        name: { type: "string", minLength: 2, maxLength: 255 },
        password: { type: "string", minLength: 2, maxLength: 16 },
    }
}