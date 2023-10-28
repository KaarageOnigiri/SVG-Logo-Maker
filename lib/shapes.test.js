const { Shape, Triangle, Circle, Square } = require('./shapes.js')

describe('Shape', () => {
    describe('Triangle', () => {
        it('should return the text color line for triangle', () => {
            const shape = new Triangle('something', 'blue', 'something');
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
})

