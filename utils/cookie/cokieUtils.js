/*
쿠키 사용하기

쿠키는 주로 사용자 세션을 관리하고, 사용자 선호도를 저장하며, 사용자 추적에 사용됩니다.
*/

// 쿠키 설정
// document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

// 쿠키 읽기
const getCookie = (name) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
