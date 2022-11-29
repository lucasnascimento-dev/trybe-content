const {encode, decode} = require('./mapString');
describe('Testa as funções encode e decode', () => {
    it('a função encode é definida', () => {
      expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
      });
    });