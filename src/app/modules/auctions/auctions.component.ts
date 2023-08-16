import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss'],
})
export class AuctionsComponent implements OnInit {
  public auctionsData: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('../../../assets/auctions.json').subscribe((response) => {
      this.auctionsData = response;
    });
  }
}
