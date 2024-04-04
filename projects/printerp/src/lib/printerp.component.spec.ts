import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterpComponent } from './printerp.component';

describe('PrinterpComponent', () => {
  let component: PrinterpComponent;
  let fixture: ComponentFixture<PrinterpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinterpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
