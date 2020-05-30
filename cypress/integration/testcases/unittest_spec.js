function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function divide (a, b) {
    return a / b
}

function multiply (a, b) {
    return a * b
}

describe('Unit test our math functions', function() {
    context('math', function() {
        it('can add numbers', function() {
        expect(add(1, 2)).to.eq(3)
    })
    
    it('can subtract numbers', function() {
        expect(subtract(5, 12)).to.eq(-7)
    })

    specify('can divide numbers', function() {
        expect(divide(27, 9)).to.eq(3)
    })

    specify('can multiply numbers', function() {
        expect(multiply(5, 4)).to.eq(20)
    })
    })
})