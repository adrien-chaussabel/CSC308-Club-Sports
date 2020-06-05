const supertest = require('supertest');
const { app, con } = require('../app');

afterAll(() => {
  con.end();
});

describe('Test#1 for POST method that retrives a user data', () => {
  it('Tests with a valid username and valid password', async () => {
    const response = await supertest(app).post('/users/getUser').send({
      username: 'pulisic11',
      password: 'america',
    });
    expect(response.body[0]).toHaveProperty('firstName');
    expect(response.body[0].firstName).toEqual('Christian');
    expect(response.body[0]).toHaveProperty('lastName');
    expect(response.body[0].lastName).toEqual('Pulisic');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0].email).toEqual('pulisic@bvb.com');
    expect(response.body[0]).toHaveProperty('password');
    // Password is encrypted on the backend and thus cannot be tested directly.
    expect(response.body[0]).toHaveProperty('type');
    expect(response.body[0].type).toEqual('student');
  });
});

describe('Test#2 for POST method that retrives a user data', () => {
  beforeEach(async () => {
    // Adds entry to be tested.
    await supertest(app).post('/users/postUser').send({
      firstName: 'Jurgen',
      lastName: 'Klopp',
      email: 'klopp@lfc.com',
      username: 'jurgen27',
      password: 'liverpool',
      type: 'coach',
    });
  });
  it('Tests with a valid username but invalid passsword', async () => {
    const response = await supertest(app).post('/users/getUser').send({
      username: 'jurgen27',
      password: 'everton',
    });
    expect(response.status).toBe(404);
  });
  afterEach(async () => {
    // Deletes added entry.
    await supertest(app).delete('/users/deleteUser/jurgen27');
  });
});

describe('Test#3 for POST method that retives a user data', () => {
  it('Tests with a valid username and password', async () => {
    const response = await supertest(app).post('/users/getUser').send({
      username: 'landon10',
      password: 'sunshine',
    });
    expect(response.body[0]).toHaveProperty('firstName');
    expect(response.body[0].firstName).toEqual('Landon');
    expect(response.body[0]).toHaveProperty('lastName');
    expect(response.body[0].lastName).toEqual('Donovan');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0].email).toEqual('ldonovan@gmail.com');
    expect(response.body[0]).toHaveProperty('password');
    // Password is encrypted on the backend and thus cannot be tested directly.
    expect(response.body[0]).toHaveProperty('username');
    expect(response.body[0].username).toEqual('landon10');
    expect(response.body[0]).toHaveProperty('type');
    expect(response.body[0].type).toEqual('coach');
  });
});

describe('Test#1 for POST method that adds a new user', () => {
  it('Adds a new user', async () => {
    const response = await supertest(app).post('/users/postUser').send({
      firstName: 'Micheal',
      lastName: 'Essien',
      email: 'essien@outlook.com',
      password: 'chelsea',
      username: 'Essien5',
      type: 'coach',
    });
    expect(response.status).toBe(201);
  });
  afterEach(async () => {
    // Deletes entry after test.
    await supertest(app).delete('/users/deleteUser/Essien5');
  });
});

describe('Test#2 for POST method that adds a new user', () => {
  it('Adds a new user', async () => {
    const response = await supertest(app).post('/users/postUser').send({
      firstName: 'Neymar',
      lastName: 'JR',
      email: 'neymar10@gmail.com',
      password: 'brazil',
      username: 'neymar10',
      type: 'student',
    });
    expect(response.status).toBe(201);
  });
  afterEach(async () => {
    // Deletes entry after test.
    await supertest(app).delete('/users/deleteUser/neymar10');
  });
});

describe('Test#1 for POST method that updates a user', () => {
  beforeEach(async () => {
    // Adds entry to be tested.
    await supertest(app).post('/users/postUser').send({
      firstName: 'Steven',
      lastName: 'Gerrard',
      email: 'stevie8@outlook.com',
      password: 'England',
      username: 'gerrard8',
      type: 'student',
    });
  });
  it('Changes type to coach', async () => {
    const response = await supertest(app).post('/users/updateUser').send({
      firstName: 'Steven',
      lastName: 'Gerrard',
      email: 'stevie8@outlook.com',
      password: 'England',
      userName: 'gerrard8',
      type: 'coach',
      oldUserName: 'gerrard8',
      oldPassword: 'England',
    });
    expect(response.status).toBe(200);

    // Verifes that type is changed to coach
    const secondResponse = await supertest(app).post('/users/getUser').send({
      username: 'gerrard8',
      password: 'England',
    });
    expect(secondResponse.body[0]).toHaveProperty('type');
    expect(secondResponse.body[0].type).toEqual('coach');
  });
  afterEach(async () => {
    // Deletes entry that was tested.
    await supertest(app).delete('/users/deleteUser/gerrard8');
  });
});

describe('Test#2 for POST method that updates a user', () => {
  beforeEach(async () => {
    // Adds entry to be tested.
    await supertest(app).post('/users/postUser').send({
      firstName: 'Kevin',
      lastName: 'Boateng',
      email: 'boateng@outlook.com',
      password: 'Boateng',
      username: 'boateng9',
      type: 'coach',
    });
  });
  it('Changes first name', async () => {
    const response = await supertest(app).post('/users/updateUser').send({
      firstName: 'Jerome',
      lastName: 'Boateng',
      email: 'boateng@outlook.com',
      password: 'Boateng',
      userName: 'boateng9',
      type: 'coach',
      oldUserName: 'boateng9',
      oldPassword: 'Boateng',
    });
    expect(response.status).toBe(200);

    // Verifes that type is changed to coach
    const secondResponse = await supertest(app).post('/users/getUser').send({
      username: 'boateng9',
      password: 'Boateng',
    });
    expect(secondResponse.body[0]).toHaveProperty('firstName');
    expect(secondResponse.body[0].firstName).toEqual('Jerome');
  });
  afterEach(async () => {
    // Deletes entry that was tested.
    await supertest(app).delete('/users/deleteUser/boateng9');
  });
});

describe('Test#1 for DELETE method', () => {
  beforeEach(async () => {
    // Adds entry to be deleted.
    await supertest(app).post('/users/postUser').send({
      firstName: 'Andres',
      lastName: 'Iniesta',
      email: 'andres08@gmail.com',
      password: 'barcelona',
      username: 'andres08',
      type: 'supporter',
    });
  });
  it('Deltes the added entry', async () => {
    const response = await supertest(app).delete('/users/deleteUser/andres08');
    expect(response.status).toBe(404);
  });
});

describe('Test#2 for DELETE method', () => {
  beforeEach(async () => {
    // Adds entry to be deleted.
    await supertest(app).post('/users/postUser').send({
      firstName: 'Paul',
      lastName: 'Scholes',
      email: 'scholes22@gmail.com',
      password: 'manunited',
      username: 'scholes22',
      type: 'coach',
    });
  });
  it('Deltes the added entry', async () => {
    const response = await supertest(app).delete('/users/deleteUser/scholes22');
    expect(response.status).toBe(404);
  });
});
