import { expect } from 'chai';
import { MockClient } from './MockClient';
import { APIBase, APIRequest, Int, ResponceEmpty } from '../API/APIBase'
import { Requests } from '../API/Requests'
import { fail } from 'assert';

describe('Requests Test', () => {
    it('SomeRequest', () => {
        const request = new Requests.petsGet_request(3)
        let responseShould = JSON.stringify([new Pet(0,3,"ololo")])
        const result = request.send(new MockClient(responseShould),(response)=>{
            expect(response).to.be(responseShould)
        },(error)=>{
            fail(error)
        })
        expect(result).to.be.true;
    });
});