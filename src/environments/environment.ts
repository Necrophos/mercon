import { PLATFORM_ID } from '@angular/core';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://variousmerconcoffee.com:8443/MerconConnectRWS/rest/MerconConnect',
  loginEndpoint: 'https://variousmerconcoffee.com:8443/MCGENSRWS/Usuario/getMobileUser',
  dropdownEndpoint: 'https://variousmerconcoffee.com:8443/CXLRWS/Location/getCountriesByCounterpart',
  APP_ID: 38,
  PLATFORM_ID: 'Web',
  USER_ID: '',
  COMPANY_NUM: '',
  USER: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.