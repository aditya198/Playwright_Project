import { test, expect } from '@playwright/test';

test('Fetch all Users from gorest Server', async ({ request }) => {
  // 1. Send GET request with headers and Bearer Token
  const response = await request.get('https://gorest.co.in/public/v2/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 75899b9dfbe0443f2d267326e2d4c0d0310a2818e537ac91d76ff9d2f7327c8c'
    }
  });

  // 2. Assert Status Code is 200 (OK)
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe('OK');
console.log(response.statusText())
console.log(response.status())
  // 3. Parse JSON response body
  const users = await response.json();

  // 4. Assert response is an array and log users
 // expect(Array.isArray(users)).toBeTruthy();
  console.log('Total Users Fetched:', users.length);
  console.log(users);
});