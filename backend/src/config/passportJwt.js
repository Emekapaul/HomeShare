import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();
const publicKey = process.env.PUBLIC_KEY.includes("\\n")
  ? process.env.PUBLIC_KEY.replace(/\\n/g, "\n")
  : process.env.PUBLIC_KEY;

console.log(
  "Public Key (first All chars):",
  publicKey ? publicKey.slice(0) : "Key not found"
);

// JWT Strategy options
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: publicKey,
  algorithms: [process.env.JWT_ALGORITHM],
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.sub);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
