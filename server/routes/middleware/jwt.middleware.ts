import jwt, { JsonWebTokenError, TokenExpiredError, NotBeforeError } from 'jsonwebtoken';
import type { Secret, SignOptions, JwtPayload } from 'jsonwebtoken';
import IToken from '../../interface/IToken';

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'your-secret-here';
const JWT_OPTIONS: SignOptions = { algorithm: 'HS256', expiresIn: '1 days' };

class Token {
  public create = (payload: JwtPayload): IToken => {
    const token = jwt
      .sign(payload, JWT_SECRET, JWT_OPTIONS);
    const newToken: IToken = { token };
    return newToken;
  };

  public verify = (token: string): JwtPayload => {
    try {
      const payload = jwt.verify(token, JWT_SECRET);
      return payload as JwtPayload;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new Error('Invalid token');
      } else if (error instanceof TokenExpiredError) {
        throw new Error('Token expired');
      } else if (error instanceof NotBeforeError) {
        throw new Error('Token not yet valid');
      } else {
        throw error;
      }
    }
  }
}

export default Token;