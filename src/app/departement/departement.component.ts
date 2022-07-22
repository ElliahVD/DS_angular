import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../service/http-client.service";
import {UrlApi} from "../../service/urlApi";
import {IDepart} from "../../model/depart";

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {

  arrayDepartements: IDepart[] = [];

  constructor(private _httpService: HttpClientService) {
  }

  ngOnInit(): void {
    this.getDepartements();
  }

  getDepartements(url: string = UrlApi.departUrl): void {
    this._httpService.getRequest<IDepart[]>(url)
      .subscribe((jsonResponse) => {
          this.arrayDepartements = jsonResponse;
        }
      );
  }
}
