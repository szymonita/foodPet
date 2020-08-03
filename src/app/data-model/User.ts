import { Pet } from './Pet';

export default class User {

  private _firstName:  string;
  private _lastName:   string;
  private _Pet:        Array<Pet>;
  private _login:      string;
  private _password:   string;

  constructor(firstName: string,
              lastName: string,
              Pet: Array<Pet>,
              login: string,
              password: string) {

    this._firstName = firstName;
    this._lastName = lastName;
    this._Pet = Pet;
    this._login = login;
    this._password = password;

  }

  /* get methods */

  getFirstName():string {
    return this._firstName;
  }

  getLastName():string {
    return this._lastName;
  }

  getPet():Array<Pet> {
    return this._Pet;
  }

  getLogin():string {
    return this._login;
  }

  getPassword():string {
    return this._password;
  }

  /* set methods */

  setFirstName(firstName: string):void {
    this._firstName = firstName;
  }

  setLastName(lastName: string):void {
    this._lastName = lastName;
  }

  setLoginName(login: string):void {
    this._login = login;
  }

  setPassword(password: string):void {
    this._password = password;
  }

}
