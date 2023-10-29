const { Shape, Triangle, Circle, Square } = require('./shapes.js')

describe('Shape', () => {
    describe('Triangle', () => {
        it('should return the text color line for triangle', () => {
            const shape = new Triangle('SSS', 'blue', 'triangle');
            expect(shape.setTextColor()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">`);
        })

        it('should return the shape and shape color line for triangle', () => {
            const shape = new Triangle('AAA', 'white', 'triangle', 'pink');
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="pink" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AAA</text>
</svg>`)
        })
    })

    describe('Square', () => {
        it('should return the text color line for square', () => {
            const shape = new Square('SSS', 'red', 'square', 'blue');
            expect(shape.setTextColor()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">`);
        })
    })

    describe('Circle', () => {
        it('should throw an Error if the Logo Text input is more than 3 characters', () => {
            const textCB = () => new Circle('SSSS', 'red', 'circle', 'something');
            expect(textCB).toThrowError();
        })
    })
})

