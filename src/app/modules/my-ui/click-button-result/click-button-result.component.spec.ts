import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickButtonResultComponent } from './click-button-result.component';

describe('ClickButtonResultComponent', () => {
  let component: ClickButtonResultComponent;
  let fixture: ComponentFixture<ClickButtonResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickButtonResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickButtonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
