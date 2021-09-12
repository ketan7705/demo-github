import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriyanshuComponent } from './priyanshu.component';

describe('PriyanshuComponent', () => {
  let component: PriyanshuComponent;
  let fixture: ComponentFixture<PriyanshuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriyanshuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriyanshuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
