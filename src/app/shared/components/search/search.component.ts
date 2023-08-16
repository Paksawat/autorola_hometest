import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public filterData: any = [];
  makes: string | undefined;
  fuelType: number | undefined;
  country: string | undefined;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.http.get('../../../assets/filters.json').subscribe((response) => {
      this.filterData = response;
    });
  }
}
