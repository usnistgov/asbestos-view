export function newTest () {
    return {
        id: null,
        name: null,
        heads: [],
        fixtures: [],
        variables: [],
        setups: [],
        tests: [],
        teardowns: []
    }
}

export function newTestEle () {
    //
    return {
        id: null,
        name: null,
        content: null
    }
}

export function newTestVariable () {
    return {
        id: null,
        testId: null, // has id and name
        name: null,
        nameErr: null,
        description: null,
        defaultValue: null,
        expression: null,
        expressionErr: null,
        headerField: null,
        hint: null,
        path: null,
        sourceId: null,
        validates: false
    }
}

function newGeneralPart() {
    return {
        id: null,
        name: null,
    }
}

export function newTestPart(type) {
    switch (type) {
        case 'variable': return newTestVariable()
        case 'fixture': return newGeneralPart()
        case 'setup': return newGeneralPart()
        case 'test': return newGeneralPart()
        case 'teardown': return newGeneralPart()
        default: throw `Don't understand type ${type}`
    }
}

