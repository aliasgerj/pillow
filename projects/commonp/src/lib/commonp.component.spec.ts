import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonpComponent } from './commonp.component';

describe('CommonpComponent', () => {
  let component: CommonpComponent;
  let fixture: ComponentFixture<CommonpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
