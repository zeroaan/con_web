import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { auth } from "store/actions/user";

const Auth = (SpecificComponent, option, adminRoute = null) => {
  // adminRouth = null : 기본적으로 null값이 들어감. true : admin유저만 들어갈 수 있음.
  // <Route exact path="/" component={Auth(LandingPage, null, null)} />;

  // SpecificComponent : Wrapped Component
  // option
  // null : 아무나 출입이 가능한 페이지
  // true : 로그인 한 유저만 출입이 가능한 페이지
  // false : 로그인 한 유저는 출입이 불가능 한 페이지
  // adminRouth : Admin user 출입기능

  function AuthenticationCheck() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        // backend에서 처리 된 정보가 response에 저장됨

        // 로그인 하지 않은 상태

        if (!response.payload.isAuth) {
          if (option) {
            history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            history.push("/");
          } else {
            if (option === false) history.push("/");
          }
        }
      });
      // eslint-disable-next-line
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
};

export default Auth;
