import { Device } from '../../types';

const sendGetRequest = (url): Cypress.Chainable<Cypress.Response<Device>> => {
  return cy.request({
    method: 'GET',
    url: url
  });
};

const sendPostRequest = (url, body): Cypress.Chainable<
  Cypress.Response<{
    id: number;
    name: string;
    data: {
      year: number;
      price: number;
      color: string;
    }
  }>
> => {
  return cy.request({
    method: 'POST',
    url: url,
    body: body
  });
};

const sendPutRequest = (url, body): Cypress.Chainable<
  Cypress.Response<{
    id: number;
    name: string;
    data: {
      year: number;
      price: number;
      color: string;
    }
  }>
> => {
  return cy.request({
    method: 'PUT',
    url: url,
    body: body
  });
};

const sendDeleteRequest = (url): Cypress.Chainable<Cypress.Response<void>> => {
  return cy.request({
    method: 'DELETE',
    url: url
  });
};

const sendPatchRequest = (url, body): Cypress.Chainable<Cypress.Response<Device>> => {
  return cy.request({
    method: 'PATCH',
    url: url,
    body: body
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      sendPostRequest: typeof sendPostRequest;
      sendGetRequest: typeof sendGetRequest;
      sendPutRequest: typeof sendPutRequest;
      sendDeleteRequest: typeof sendDeleteRequest;
      sendPatchRequest: typeof sendPatchRequest;
    }
  }
}
Cypress.Commands.add('sendPostRequest', sendPostRequest);
Cypress.Commands.add('sendGetRequest', sendGetRequest);
Cypress.Commands.add('sendPutRequest', sendPutRequest);
Cypress.Commands.add('sendDeleteRequest', sendDeleteRequest);
Cypress.Commands.add('sendPatchRequest', sendPatchRequest);
export {};
