import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctFormComponent } from './proudct-form.component';

describe('ProudctFormComponent', () => {
  let component: ProudctFormComponent;
  let fixture: ComponentFixture<ProudctFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudctFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
