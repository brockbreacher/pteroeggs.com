import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {
  private configData: Object = {};

  constructor(private http: HttpClient) {
    this.preflight();
  }

  private async preflight() {
    await this.http.get('./assets/config.json').subscribe(data => {
      this.configData = data;
    });
  }

  public getFallbackImages(): Object {
    return this.configData['fallback_images'];
  }

  public getStateDisplay(state: string): Object {
    let mappings: Object = this.configData['state_map'];
    
    switch(state.toLowerCase()) {
      case 'development':
        return mappings['development'];
      case 'beta': 
        return mappings['beta'];
      case 'stable':
        return mappings['stable'];
      default:
        return mappings['default'];
    }
  }

  public getAvailableTags(): Object {
    return this.configData['available_tags'];
  }
}
