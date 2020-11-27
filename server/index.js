// 백엔드의 시작점

const express = require("express");
const app = express();
const port = 8080;
const bodyparser = require("body-parser"); // client에서 보낸 정보를 분석해서 가져올 수 있게 함
const mongoose = require("mongoose");
const { User } = require("./models/User"); // User.js DB 가져옴
const config = require("./config/key"); // key값 가져옴
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");
const cors = require("cors");

app.use(cors()); // cors 미들웨어 추가

// const corsOptions = {
//     origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
//     credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
// };

// app.use(cors(corsOptions)); // config 추가

// application/x-www-form-urlencoded 형식의 자료 분석
app.use(bodyparser.urlencoded({ extended: true }));
// application/json 형식의 자료 분석
app.use(bodyparser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("안녕하세요"));

app.get("/api/hello", (req, res) => {
  res.send("backend api/hello response ~");
});

app.post("/api/users/register", (req, res) => {
  // 회원가입 시 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어준다.

  const user = new User(req.body);
  // User모델의 body정보 객체생성
  // body 안에는 json형식으로 정보가 들어있음.

  // mongodb에서 오는 method
  // user모델에 저장이 됨
  user.save((err, userinfo) => {
    if (err) return res.json({ success: false, err }); //success: false / 성공하지 못했을 때
    return res.status(200).json({
      //return res.status(200) 성공했다는 표시
      success: true, // 성공 시 postman에서 뜨는 문구
    });
  });
});

app.post("/api/users/login", (req, res) => {
  // 요청된 이메일을 DB에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
    // 요청된 이메일이 있다면 비밀번호가 맞는지 확인한다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      // 비밀번호가 같다면 Token 생성한다.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // token을 저장. 쿠키, 로컬 스토리지, 세션 등 여러군데 가능
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  // api/users/auth에서 req 받고, auth middleware 통과, res 해줌.
  // 여기까지 middleware를 통과해왔다는 얘기는
  // Auth가 True라는 말
  res.status(200).json({
    _id: req.user._id, // auth.js에서 req.user에 넣었기 때문에 사용가능
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

// token을 지워줌 / login 된 상태이기 때문에 auth middleware가 들어가있음.
app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
