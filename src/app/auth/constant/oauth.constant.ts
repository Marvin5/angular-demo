export enum RequestParam {
  // oauth parameter
  clientId = 'client_id',
  clientSecret = 'client_secret',
  grantType = 'grant_type',
  username = 'username',
  password = 'password'
}

export enum GrantType {
  password = 'password',
  refreshToken = 'refresh_token'
}

export enum ClientDetail {
  clientId = 'myClient',
  clientSecret = 'secret'
}
