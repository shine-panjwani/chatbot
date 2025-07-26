import jwt from "jsonwebtoken";
export default function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      msg: "Token missing",
    });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).json({
        msg: "Something went wrong",
      });
    }
    req.userId = verified.id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
}
