// models/User.test.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import User from './User';

const userExample = {
    firstName: "habib",
    lastName: "hezarehee",
    email: "habib@klarna.se",
    password: "1q2w3a$S",
    phoneNumber: "0708279043",
    city: "Stockholm",
    country: "Sweden",
    dateOfBirth: "1997-09-10",
    gender: "male"
}

describe('User Class', () => {
    let user;
    let mock;

    beforeAll(() => {
        // Create a new instance of User and mock adapter
        user = new User();
        mock = new MockAdapter(user.api);
    });

    afterEach(() => {
        // Reset the mock after each test
        mock.reset();
    });

    afterAll(() => {
        // Restore the default adapter
        mock.restore();
    });

    test('register() should successfully register a user', async () => {
        // Arrange


        // Mock the response
        mock.onPost('/register').reply(200, {
            message: 'User registered successfully',
        });

        // Act
        const response = await user.register(userExample);

        // Log the response
        console.log(response);

        // Assert
        expect(response).toEqual({ message: 'User registered successfully' });
    });

    test('register() should handle registration error', async () => {
        // Arrange


        // Mock the error response
        mock.onPost('/register').reply(500, {
            message: 'Internal Server Error',
        });

        // Act
        const response = await user.register(userExample);

        // Log the response
        console.log(response);

        // Assert
        expect(response).toBeNull();
    });
});
