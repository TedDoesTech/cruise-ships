/* globals describe it expect */

const Port = require('../src/port.js');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        const port = new Port('Dover');

        expect(port.name).toEqual('Dover');
    });

    it('can add a ship', () => {
        const ship = {};
        const port = new Port('Dover');

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};
        
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});