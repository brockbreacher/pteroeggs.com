import { Component, OnInit, Input } from '@angular/core';
import { EggDataService } from '../services/egg-data.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigDataService } from '../services/config-data.service';

@Component({
  selector: 'app-egg-card',
  templateUrl: './egg-card.component.html',
  styleUrls: ['./egg-card.component.scss']
})
export class EggCardComponent implements OnInit {
  public originalEgg: Object;
  public egg: Object;
  public jsonUrl: Object;
  @Input() eggKey: string;

  constructor(private eggService: EggDataService, private configService: ConfigDataService, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.egg = this.eggService.get(this.eggKey);
    this.originalEgg = this.egg;

    if (this.egg['download_json'] != null) {
      this.http.get(this.egg['download_json']).subscribe((data: Object) => {
        let blob = new Blob([JSON.stringify(data)], { type: 'application/json'});

        this.jsonUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      })
    }
  }

  getCardImage() {
    if (this.egg['image'] == null) {
      if (this.egg['official']) {
        return this.configService.getFallbackImages()['official'];
      } else {
        return this.configService.getFallbackImages()['default'];
      }
    }

    return this.egg['image'];
  }

  getState() {
    return this.configService.getStateDisplay(this.egg['state']);
  }
}
