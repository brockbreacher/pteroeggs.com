import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EggDataService {
  private eggData: Object = {};

  constructor(private http: HttpClient) {
    this.preflight();
  }

  private async preflight() {
    await this.http.get('./assets/eggs.json').subscribe(data => {
      this.eggData = data;
    });
  }

  public keys() {
    return Object.keys(this.eggData);
  }

  public all(): Object {
    return this.eggData;
  }

  public get(key: string): Object {
    return this.eggData[key];
  }
}
