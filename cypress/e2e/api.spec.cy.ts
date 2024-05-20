const POST_URL = '/objects';
const GET_URL = '/objects';
const PUT_BODY = {
  name: 'Apple MacBook Pro 16',
  data: {
    year: 2019,
    price: 2049.99,
    'CPU model': 'Intel Core i9',
    'Hard disk size': '1 TB',
    color: 'silver'
  }
};
const POST_BODY = {
  name: 'Apple MacBook Pro 16',
  data: {
    year: 2019,
    price: 1849.99,
    'CPU model': 'Intel Core i9',
    'Hard disk size': '1 TB'
  }
};
const PATCH_BODY = {
  name: "Apple MacBook Pro 16 (Updated Name)"
}

describe('Test API', () => {
  it('Check POST', () => {
    cy.sendPostRequest(POST_URL, POST_BODY).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.have.property('name').to.eq(POST_BODY.name);
      expect(body.data['CPU model']).to.eq(POST_BODY.data['CPU model']);
      expect(body.data.year).to.eq(POST_BODY.data.year);
      expect(body.data.price).to.eq(POST_BODY.data.price);
    });
  });

  it('Check GET', () => {
    cy.sendGetRequest(GET_URL).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.have.length(13);
      expect(body[0]).to.have.property('id').to.eq('1');
    });
  });

  it('Check PUT', () => {
    cy.sendPostRequest(POST_URL, POST_BODY).then(({ status, body }) => {
      const PUT_URL = `/objects/${body.id}`;
      cy.sendPutRequest(PUT_URL, PUT_BODY).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body).to.have.property('name').to.eq(PUT_BODY.name);
        expect(body.data['CPU model']).to.eq(PUT_BODY.data['CPU model']);
        expect(body.data.year).to.eq(PUT_BODY.data.year);
        expect(body.data.price).to.eq(PUT_BODY.data.price);
        expect(body.data.color).to.eq(PUT_BODY.data.color);
      });
    });
  });

  it('Check DELETE', () => {

    cy.sendPostRequest(POST_URL, POST_BODY).then(({ status, body }) => {
      expect(status).to.eq(200);
      const DELETE_URL = `/objects/${body.id}`;
      cy.sendDeleteRequest(DELETE_URL).its('status').should('eq', 200);
    });
  });

  it('Check PATCH', () => {
    cy.sendPostRequest(POST_URL, POST_BODY).then(({ status, body }) => {
      expect(status).to.eq(200);
      const PATCH_URL = `/objects/${body.id}`;
      cy.sendPatchRequest(PATCH_URL, PATCH_BODY).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.name).to.eq(PATCH_BODY.name);
      })
    });
  });
});