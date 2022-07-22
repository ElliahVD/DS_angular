import {Component, OnInit} from '@angular/core';
import {UrlApi} from "../../service/urlApi";
import {IRegion} from "../../model/region";
import {HttpClientService} from "../../service/http-client.service";

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.scss']
})

export class FranceComponent implements OnInit {
  arrayRegions: IRegion[] = [];

  constructor(private _httpService: HttpClientService) {
  }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(url: string = UrlApi.regionUrl): void {
    this._httpService.getRequest<IRegion[]>(url)
      .subscribe((jsonResponse) => {
          this.arrayRegions = jsonResponse;
        }
      );
  }
}
