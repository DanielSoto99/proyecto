import { inject, Injectable } from '@angular/core';


import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthenticacionService {
  private oAuthService = inject(OAuthService);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration(){
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '188830204064-pgbm887k5cmu6c9fhlsk09pic5qr78rf.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/dashboard',
      scope: 'openid profile email',
      showDebugInformation: true
    };

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }


  register() {}

  logIn() {}


  logInWithGoogle(){
    this.oAuthService.initImplicitFlow();

  }
    

  logOut(){
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }


  getProfile(){
    const profile = this.oAuthService.getIdentityClaims();
    return profile;
  }
  

  getToken(){
    return this.oAuthService.getAccessToken();
  }
}
