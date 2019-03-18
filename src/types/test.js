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
    // varaible, test, etc.
    return {
        id: null,
        name: null,
        content: null
    }
}

