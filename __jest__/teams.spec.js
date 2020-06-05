const supertest = require('supertest');
const { app, con } = require('../app');

afterAll(() => {
  con.end();
});

test('basic Test', () => {
  expect(4).toBe(4);
});

describe('basictest2', () => {
  it('asserts 5 is equal to 5', () => {
    expect(5).toBe(5);
  });
});

describe('basictest3', () => {
  it('asserts 10 is equal to 10', () => {
    expect(10).toBe(10);
  });
});

describe('basic API test', () => {
  it('checks the basic api', async () => {
    const response = await supertest(app).get('/basic');
    expect(response.status).toBe(200);
  });
});

describe('Test#1 for GET method', () => {
  it('Tests the GET method in events.js with a valid value in the database', async () => {
    const response = await supertest(app).get('/teams/Basketball/coed');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0].name).toEqual('Basketball');
    expect(response.body[0]).toHaveProperty('gender');
    expect(response.body[0].gender).toEqual('coed');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0].email).toEqual('cbb@calpoly.edu');
    expect(response.body[0]).toHaveProperty('instagram');
    expect(response.body[0].instagram).toEqual('@cpbb');
    expect(response.body[0]).toHaveProperty('facebook');
    expect(response.body[0].facebook).toEqual('http://www.facebook.com/cpbb');
    expect(response.body[0]).toHaveProperty('website');
    expect(response.body[0].website).toEqual('www.cpbb.org');
    expect(response.body[0]).toHaveProperty('about');
    expect(response.body[0].about).toEqual('COED basketball team');
  });
});

describe('Test#2 for GET method', () => {
  it('Tests the GET method in events.js with an invalid value not in the database', async () => {
    const response = await supertest(app).get('/teams/Rugby/coed');
    expect(response.body.length).toBe(0);
  });
});

describe('Test#3 for GET method', () => {
  it('Tests the GET method in events.js with a valid value in the database', async () => {
    const response = await supertest(app).get('/teams/Tennis/coed');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0].name).toEqual('Tennis');
    expect(response.body[0]).toHaveProperty('gender');
    expect(response.body[0].gender).toEqual('coed');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0].email).toEqual('cptennis@calpoly.edu');
    expect(response.body[0]).toHaveProperty('instagram');
    expect(response.body[0].instagram).toEqual('@cal_poly_tennis');
    expect(response.body[0]).toHaveProperty('facebook');
    expect(response.body[0].facebook).toEqual('http://www.facebook.com/cptennis');
    expect(response.body[0]).toHaveProperty('website');
    expect(response.body[0].website).toEqual('www.calpolytennis.com');
    expect(response.body[0]).toHaveProperty('about');
    expect(response.body[0].about).toEqual('COED tennis team');
  });
});

describe('Test#1 for the POST method in events.js that adds a new event', () => {
  it('Tests the POST method in events.js that adds a new event', async () => {
    const response = await supertest(app).post('/teams/add').send({
      name: 'Baseball',
      gender: 'coed',
      email: 'baseball@calpoly.edu',
      instagram: '@cp_baseball',
      facebook: 'http://www.facebook.com/cpBaseball',
      website: 'www.cpbaseball.calpoly.edu',
      about: 'COED BASEBALL TEAM',
    });
    expect(response.status).toBe(200);
  });
  afterEach(async () => {
    // Deletes entry after completing test.
    await supertest(app).delete('/teams/deleteTeam/Baseball/coed');
  });
});

describe('Test#2 for the POST method in events.js that adds a new event', () => {
  it('Tests the POST method in events.js that adds a new event', async () => {
    const response = await supertest(app).post('/teams/add').send({
      name: 'Soccer',
      gender: 'coed',
      email: 'cpsc@calpoly.edu',
      instagram: '@cp_soccer',
      facebook: 'http://www.facebook.com/cpSoccer',
      website: 'www.cpsoccer.calpoly.edu',
      about: 'COED SOCCER TEAM',
    });
    expect(response.status).toBe(200);
  });
  afterEach(async () => {
    // Deletes entry after completing test.
    await supertest(app).delete('/teams/deleteTeam/Soccer/coed');
  });
});

describe('Test#1 for the POST method in events.js that updates a new event', () => {
  beforeEach(async () => {
    // Adds team to be updated, before running the test.
    await supertest(app).post('/teams/add').send({
      name: 'Badminton',
      gender: 'coed',
      email: 'badminton@calpoly.edu',
      instagram: '@cp_badminton',
      facebook: 'http://www.facebook.com/cpBadminton',
      website: 'www.cpbadminton.com',
      about: 'COED BADMINTON TEAM',
    });
  });
  it('Updates the email of the added team', async () => {
    const response = await supertest(app).post('/teams/update').send({
      name: 'Badminton',
      gender: 'coed',
      email: 'badminton27@calpoly.edu',
      instagram: '@cp_badminton',
      facebook: 'http://www.facebook.com/cpBadminton',
      website: 'www.cpbadminton.com',
      about: 'COED BADMINTON TEAM',
      oldName: 'Badminton',
      oldGender: 'coed',
    });
    expect(response.status).toBe(200);

    // Verifies that the value to be updated, is updated.
    const getResponse = await supertest(app).get('/teams/Badminton/coed');
    expect(getResponse.body[0]).toHaveProperty('email');
    expect(getResponse.body[0].email).toEqual('badminton27@calpoly.edu');
  });
  afterEach(async () => {
    // Deletes entry after performing test.
    await supertest(app).delete('/teams/deleteTeam/Badminton/coed');
  });
});

describe('Test#2 for the POST method in events.js that updates a new event', () => {
  beforeEach(async () => {
    // Adds team to be updated, before running the test.
    await supertest(app).post('/teams/add').send({
      name: 'Hockey',
      gender: 'coed',
      email: 'hockey@calpoly.edu',
      instagram: '@cp_hockey',
      facebook: 'http://www.facebook.com/hockey',
      website: 'www.cphockey.com',
      about: 'COED HOCKEY TEAM',
    });
  });
  it('Updates the facebook URL of the added team', async () => {
    const response = await supertest(app).post('/teams/update').send({
      name: 'Hockey',
      gender: 'coed',
      email: 'hockey@calpoly.edu',
      instagram: '@cp_hockey',
      facebook: 'http://www.facebook.com/cpHockey',
      website: 'www.cphockey.com',
      about: 'COED HOCKEY TEAM',
      oldName: 'Hockey',
      oldGender: 'coed',
    });
    expect(response.status).toBe(200);
    // Confirms that the value that was supposed to be updated, is updated.
    const getResponse = await supertest(app).get('/teams/Hockey/coed');
    expect(getResponse.body[0]).toHaveProperty('facebook');
    expect(getResponse.body[0].facebook).toEqual('http://www.facebook.com/cpHockey');
  });
  afterEach(async () => {
    // Deletes entry after test.
    await supertest(app).delete('/teams/deleteTeam/Hockey/coed');
  });
});

describe('Test#1 for the DELETE method in events.js', () => {
  beforeEach(async () => {
    // Adds an entry to the database.
    await supertest(app).post('/teams/add').send({
      name: 'Football',
      gender: 'coed',
      email: 'cpfootball@calpoly.edu',
      instagram: '@cp_football',
      facebook: 'http://www.facebook.com/calpolyFootball',
      website: 'www.CPF.calpoly.edu',
      about: 'COED FOOTBALL TEAM',
    });
  });
  it('Deletes the entry added', async (done) => {
    const response = await supertest(app).delete('/teams/deleteEvent/Football/coed');
    expect(response.status).toBe(404);
    done();
  });
});

describe('Test#2 for the DELETE method in events.js', () => {
  beforeEach(async () => {
    // Adds an entry to the database.
    await supertest(app).post('/teams/add').send({
      name: 'Swimming',
      gender: 'coed',
      email: 'cpswimming@calpoly.edu',
      instagram: '@cp_swimming',
      facebook: 'http://www.facebook.com/calpolySwimming',
      website: 'www.cpswimming.com',
      about: 'COED SWIMMING TEAM',
    });
    it('Deletes the entry added', async () => {
      const response = await supertest(app).delete('/teams/deleteEvent/Swimming/coed');
      expect(response.status).toBe(404);
    });
  });
});
