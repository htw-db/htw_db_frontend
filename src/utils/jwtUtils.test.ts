import { decodeJwt } from './jwtUtils';

describe('jwtUtils', () => {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InMwNTU4MTUxIn0.DDNBIrZ4P2zptZ10z8S1CJo94ihVFgL93qKk247H6WE';
  it('gets the decoded payload ignoring signature', () => {
    expect(decodeJwt(token)).toEqual({ username: 's0558151' });
  });
});
