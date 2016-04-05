"use strict";

export const domain = (function (isdev) {
  if (isdev) {
    return 'https://edheroz.com/api/v2';
  } else {
    return 'https://everydayhero.com/api/v2';
  }
})(__DEV__);

export const oauth_domain = (function (isdev) {
  if (isdev) {
    return 'passport.edheroz.com';
  } else {
    return 'passport.everydayhero.com';
  }
})(__DEV__);

