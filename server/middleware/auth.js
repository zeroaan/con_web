const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증처리를 하는 곳

  // client cookie에서 token을 가져옴 (cookie parser 사용)
  let token = req.cookies.x_auth;

  // token을 decode하고 user를 찾음
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    // req에 넣어주는 이유 : token, user를 index에서 꺼낼 수 있음.
    next();
    //middleware이기 때문에 다음으로 넘어갈 수 있게 next사용
  });

  // user가 있으면 OK

  // user가 없으면 인증 NO
};

module.exports = { auth };
