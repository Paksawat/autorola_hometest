import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionResultComponent } from './auction-result.component';

describe('AuctionResultComponent', () => {
  let component: AuctionResultComponent;
  let fixture: ComponentFixture<AuctionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
