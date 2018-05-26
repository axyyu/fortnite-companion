import {Injectable} from '@angular/core';
import * as Fortnite from 'fortnite-api';

@Injectable()
export class FortniteService {


    constructor() {
      let fortniteAPI = new Fortnite(
          [
              "EMAIL_ACCOUNT",
              "PASSWORD",
              "CLIENT LAUNCHER TOKEN",
              "FORTNITE CLIENT TOKEN"
          ],
          {
              debug: true
          }
      );

      fortniteAPI.login().then(() => {
          console.log("test");
      });
    }

    initialize() {

    }

}
