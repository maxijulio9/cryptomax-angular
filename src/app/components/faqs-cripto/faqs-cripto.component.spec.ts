import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsCriptoComponent } from './faqs-cripto.component';

describe('FaqsCriptoComponent', () => {
  let component: FaqsCriptoComponent;
  let fixture: ComponentFixture<FaqsCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsCriptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
