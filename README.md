# con_web

- https://con-web.herokuapp.com//
- 기간 : 2020.11 ~ 2020.12
- 소개 : Kosta Team Project - 자율주행 배달로봇 Web

  <br />

- kosta에서 진행한 팀 프로젝트로 Raspberry pi와 Ros 등을 이용하여 만든 로봇에 대한 설명, 사용 기술 그리고 팀 소개로 홈페이지를 만들어 보았다.
- 또한 우측 상단의 실행 버튼을 통해 로봇의 단순 조작과 Ros를 통한 현재 위치 감지까지 실시간으로 볼 수 있게 하였다.
- Heroku 를 통해 server와 client 모두 배포 완료 하였다.

![home](https://user-images.githubusercontent.com/48481448/102854508-02d81280-4466-11eb-8484-8fadbbfc0f17.png)

<br />

## React 사용 기술

- **react-router**: route를 사용하여 Single Page Application를 구현하였다.
- **react-redux**: User data를 한 곳에서 관리하기 위해 redux를 사용하였다. 각자 다른 컴포넌트에서 user data를 사용 가능하다.
- **redux-saga**: 동기적으로 실행되는 것을 막기 위해 미들웨어인 saga를 사용하였다. 비동기 요청을 할 때 각자 컴포넌트에서 요청하지 않고 saga에서 모아서 사용하였다.
- **redux-persist**: 로컬 스토리지를 사용하여 로그인 상태가 유지되도록 하였다.
- **styled-components**: CSS in JS 를 위해 styled-components 를 사용하였다.
- **material-ui**: github 아이콘 등 icon 사용을 위해 사용하였다.

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
