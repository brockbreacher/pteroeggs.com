import { Component, OnInit } from '@angular/core';
import { EggDataService } from '../services/egg-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private eggService: EggDataService) { }

  ngOnInit() {
  }
}
