const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI()', () => {
	it('should return a promise that resolves with an object containing a successful response from the API', async () => {
		const paymentToken = await getPaymentTokenFromAPI();
		expect(paymentToken.data).to.equal('Successful response from the API');
	});
});