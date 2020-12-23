# Kosta Team Project - 자율주행 배달로봇 Web

- https://con-web.herokuapp.com/
- 기간 : 2020.11.12 ~ 2020.12
- 사용기술 : react, react-router, redux, redux-saga, axios, styled-components, material-ui, node.js, express, mongoDB

  <br />

## 소개

- kosta에서 진행한 팀 프로젝트로 Raspberry pi와 Ros, Lidar 등을 이용하여 만든 로봇에 대한 설명, 사용 기술 그리고 팀 소개로 홈페이지를 만들어 보았다.
- 또한 우측 상단의 실행 버튼을 통해 로봇의 단순 조작과 Ros를 통한 현재 위치 감지까지 실시간으로 볼 수 있게 하였다.
- Heroku 를 통해 server와 client 모두 배포 완료 하였다.

![home](https://user-images.githubusercontent.com/48481448/102854508-02d81280-4466-11eb-8484-8fadbbfc0f17.png)

<br />

## 페이지 설명

- 페이지는 로그인, 회원가입 페이지를 제외하고 총 4개로 About, Tect, History, Member로 구성되어 있다.

  <br />

#### - 먼저 About 페이지는 프로젝트의 소개와 프로젝트의 방향에 대해서 기술하였다.

![about](https://user-images.githubusercontent.com/48481448/102862703-d5df2c00-4474-11eb-972d-2a137ceb990e.png)

<br />

#### - Tech 페이지는 프로젝트에서 사용한 기술들과 H/W 와 S/W Logic 그리고 Ros Logic이 있다.

![tech](https://user-images.githubusercontent.com/48481448/102862603-b0522280-4474-11eb-8a9e-9cc6737e5400.png)

<br />

#### - History 페이지에는 프로젝트 회의 날짜, 회의명 그리고 사진으로 구성되어 있다.

![history](https://user-images.githubusercontent.com/48481448/102863114-7afa0480-4475-11eb-9a3f-5e37d8c4a58f.png))

<br />

#### - Member 페이지에는 프로젝트 멤버들과 담당 분야, 사용 기술 등을 적었다.

![member](https://user-images.githubusercontent.com/48481448/102863175-8cdba780-4475-11eb-82db-002bfbf68810.png)

<br />

## client directory 구조

![directory](https://user-images.githubusercontent.com/48481448/102853855-7f69f180-4464-11eb-8ab6-454207492e8c.png)

<br />

### src/assets

- logo, background image 등 각 페이지에서 사용되는 이미지(png, gif)들이 있다.

![assets](https://user-images.githubusercontent.com/48481448/102863287-b4cb0b00-4475-11eb-9615-a5f8573fedf6.png)

<br />

### src/components

- Navbar, Header, Footer, Layout과 같이 모든 페이지에 사용되는 컴포넌트들과 About, Tech, Histroy, Member과 같은 페이지에서 필요한 컴포넌트들이 있다.
  <br />
- Navbar : scroll를 아래로 내릴 시 navbar가 보이지 않음
  <br/>

#### src/components/Navbar/Navbar.js

```jsx
const Navbar = ({ color, home }) => {
  const location = useLocation();
  const PathName = loginState ? location.pathname : "/login";
  const { userData } = useSelector((state) => state.user);

  const [loginState, setLoginState] = useState(userData.isAuth);
  const [operationState, setOperationState] = useState(false);

  const navEl = useRef(null);
  const prevScrollTop = useRef(0);
  const nowScrollTop = useRef(0);

  const onClickOperation = () => {
    setOperationState(true);
  };
  const onClickClose = () => {
    setOperationState(false);
  };

  useEffect(() => {
    setLoginState(userData.isAuth);
    return () => {
      setLoginState(false);
    };
  }, [userData]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = ("scroll", e.target.scrollingElement.scrollTop);

      // scroll 를 어느정도 내리면 navbar와 content가 겹쳐 보이지 않도록 배경색을 조정
      if (scrollTop > 420) {
        if (navEl.current) {
          navEl.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }
      } else {
        if (navEl.current) {
          navEl.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      }

      // scroll을 올릴 땐 navbar가 보이고, scroll을 내릴 땐 navbar을 안 보이게 함
      nowScrollTop.current = scrollTop;
      if (prevScrollTop.current - nowScrollTop.current > 0 || scrollTop === 0) {
        if (navEl.current) {
          navEl.current.style.top = "0";
        }
      } else {
        if (navEl.current) {
          navEl.current.style.top = "-60px";
        }
      }
      prevScrollTop.current = nowScrollTop.current;
    });

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <DivNav ref={navEl}>
        <Link to="/">
          <ImgLogo src={LOGO2} alt="LOGO" />
        </Link>
        <DivNavMenu color={color} home={home}>
          <Link to="/about">About</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/history">History</Link>
          <Link to="/member">Member</Link>
        </DivNavMenu>
        <ButtonOperation to={PathName} onClick={onClickOperation}>
          <img style={{ width: "35px", marginRight: "5px" }} src={RUN} alt="RUN" />
        </ButtonOperation>
        {operationState ? <Operation onClickClose={onClickClose} /> : null}
        <LoginButton color={color} />
      </DivNav>
    </>
  );
};
```

<br />

### src/data

- 각 페이지에서 필요한 데이터(img 또는 text data)가 있다.

<br />

### src/pages

- 하나의 페이지로 모두 AuthRoute를 통해 로그인 여부에 따라 페이지 접속이 가능하게 한다.
  <br />
- AuthRoute : component, option, admin 여부를 props로 전달 받아 페이지 접속을 가능하게 한다.
  <br />

#### src/pages/Router.js

```jsx
const Router = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} option={false} />
          <AuthRoute exact path="/register" component={Register} option={false} />
          <AuthRoute exact path="/about" component={About} />
          <AuthRoute exact path="/history" component={History} />
          <AuthRoute exact path="/tech" component={Tech} />
          <AuthRoute exact path="/operation" component={Operation} option={true} />
          <AuthRoute exact path="/member" component={Members} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
```

<br />

#### src/pages/AuthRoute

```jsx
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, option = null, admin = null, ...rest }) => {
  const { userData } = useSelector((store) => store.user);

  const AuthCheck = (Component, props, option, admin) => {
    if (!userData.isAuth) {
      if (option) {
        return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
      }
    } else {
      if (admin && !userData.isAdmin) {
        return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
      } else {
        if (option === false) {
          return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }
    }
    return <Component {...props} />;
  };

  return (
    <>
      <Route {...rest} render={(props) => AuthCheck(Component, props, option, admin)} />
    </>
  );
};

export default AuthRoute;
```

<br />
<br />

## Redux

- user data를 한 스토어에서 관리하기 위해 사용했으며 로그인, 로그아웃, 회원가입 시 store에 data가 저장된다.
- 비동기적으로 하기 위해 미들웨어인 saga를 적용하였다.
  <br />

#### src/store/index.js

```js
import { applyMiddleware, createStore } from "redux";
import createSaga from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import saga from "store/sagas";
import Reducer from "store/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, Reducer);

const sagaMiddleWare = createSaga();

export const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

export const persistor = persistStore(store);

sagaMiddleWare.run(saga);
```

  <br />

### Action

#### src/store/actions/types.js

```js
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const AUTH_USER = "AUTH_USER";
```

<br />

### Reducer

- server를 통해 전달받은 데이터들을 store에 저장한다.
  <br />

#### src/store/reducers/user.js

```js
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loginData: action.payload };
    case LOGIN_FAILURE:
      return { ...state, error: action.error };

    case LOGOUT_SUCCESS:
      return { ...state, userData: action.payload, loginData: {} };
    case LOGOUT_FAILURE:
      return { ...state, error: action.error };

    case REGISTER_SUCCESS:
      return { ...state, registerData: action.payload };
    case REGISTER_FAILURE:
      return { ...state, error: action.error };

    case AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
```

<br />

### Saga

#### src/store/sagas/user.js

```js
function loginApi(loginData) {
  return axios.post("/api/users/login", loginData);
}
function logoutApi() {
  return axios.get("/api/users/logout");
}
function registerApi(registerData) {
  return axios.post("/api/users/register", registerData);
}
function authApi() {
  return axios.get("/api/users/auth");
}
```

```js
function* login(action) {
  try {
    const result = yield call(loginApi, action.loginData);
    yield put(loginSuccess(result.data));
    if (result.data.loginSuccess) {
      const result2 = yield call(authApi);
      yield put(authUser(result2.data));
      yield call(action.history.push, "/");
    } else {
      alert("아이디 또는 비밀번호가 틀립니다.");
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logout() {
  try {
    const result = yield call(logoutApi);
    yield put(logoutSuccess(result.data));
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

function* register(action) {
  try {
    const result = yield call(registerApi, action.registerData);
    yield put(registerSuccess(result.data));
    if (result.data.success) {
      yield put(loginRequest(action.registerData, action.history));
    } else {
      alert("이미 등록된 이메일입니다.");
    }
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}
```
