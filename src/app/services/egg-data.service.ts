import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigDataService } from './config-data.service';

@Injectable({
  providedIn: 'root'
})
export class EggDataService {
  private originalEggData: Object = {};
  private eggData: Object = {};

  constructor(private http: HttpClient, private configService: ConfigDataService) {
    this.preflight();
  }

  private async preflight() {
    await this.http.get('./assets/eggs.json').subscribe(data => {
      this.eggData = data;
      this.originalEggData = this.eggData;
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

  public filterByTag(tag: string): void {
    this.eggData = this.originalEggData;
    let availableTags = this.configService.getAvailableTags();

    Object.keys(this.eggData).forEach((eggKey: string) => {
      console.log(eggKey);
    });
  }
}
