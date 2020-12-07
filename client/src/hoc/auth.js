import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authRequest } from "store/actions/user";

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
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authRequest());

      // eslint-disable-next-line
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
};

export default Auth;
