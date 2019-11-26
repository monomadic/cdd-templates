
import { expect } from 'chai';
import { bar, barAsync } from '../API/APIBase';

describe('bar', () => {
    it('sync function returns true', () => {
        const result = bar(3);
        expect(result).to.be.true;
    });

    it('async function returns true', async () => {
        const result = await barAsync(3);
        expect(result).to.be.true;
    });

    it('sync function returns false', () => {
        const result = bar(-3);
        expect(result).to.be.false;
    });

    it('async function returns false', async () => {
        const result = await barAsync(-3);
        expect(result).to.be.false;
    });
});
