import passport from "../authStrategy/passportJwt.js";

const authMiddleware = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (info && info.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Unauthorized: Token has expired" });
    }

    if (err || !user) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export default authMiddleware;
