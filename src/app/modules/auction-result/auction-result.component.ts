import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auction-result',
  templateUrl: './auction-result.component.html',
  styleUrls: ['./auction-result.component.scss'],
})
export class AuctionResultComponent implements OnInit {
  public auctionsData: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../../../assets/auction.json').subscribe((response) => {
      this.auctionsData = response;
    });
  }
}
