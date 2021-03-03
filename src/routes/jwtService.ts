import * as jwt from 'jsonwebtoken'
import { User } from '../models/user';
const JWT_SIGN_SECRET = 'RT3zxQ2Fn3A3j666fNj6r4u7Ec8gVLYsCW9UD78HZE5D63pJU69gen35grnPyj8E433sUY525Je3hZwTSgumJ7m3MZzi233NgGfd';

export class jwtService {

    static verifToken(token) {
        const that = this
        return new Promise(function (resolve, reject) {
            try {
                token = that.parseToken(token);
                let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (!jwtToken) throw new Error("Token User Invalid")
                resolve(jwtToken);
            } catch (err) {
                reject(err);
            }
        })
    }

    static generateToken(user: User) {
        return jwt.sign({
            _id: user._id,
        },
            JWT_SIGN_SECRET, {
            expiresIn: "10d",
            algorithm: "HS512",
        });
    }

    static parseToken(token) {
        return token.replace('Bearer ', '')
    }
}