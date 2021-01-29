import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import { ProfileInterface } from '../types';

const profileSchema = Yup.object({
  username: Yup.string().required('this is required'),
});

/**
 * Decodes payload without verifying if the signature is valid
 * @param token is the JsonWebToken string
 */
export const decodeJwt = (token: string): ProfileInterface | undefined => {
  const decoded = jwt.decode(token);
  if (decoded) {
    try {
      const profile: ProfileInterface = profileSchema.validateSync(decoded);
      return profile;
    } catch (err) {
      return undefined;
    }
  }
  return undefined;
};
