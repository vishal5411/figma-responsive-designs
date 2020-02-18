import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentVenturesComponent } from './recent-ventures.component';

describe('RecentVenturesComponent', () => {
  let component: RecentVenturesComponent;
  let fixture: ComponentFixture<RecentVenturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentVenturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentVenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
