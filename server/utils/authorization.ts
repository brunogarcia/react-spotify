interface IAuthorization {
  tokenType: string;
  accessToken: string;
}

export default class Authorization {
  private auth: string = ''

  public get (): string {
    return this.auth
  }

  public set (data: IAuthorization): void {
    this.auth = `${data.tokenType} ${data.accessToken}`
  }
}
