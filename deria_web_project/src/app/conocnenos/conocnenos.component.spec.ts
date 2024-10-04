import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocnenosComponent } from './conocnenos.component';

describe('ConocnenosComponent', () => {
  let component: ConocnenosComponent;
  let fixture: ComponentFixture<ConocnenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConocnenosComponent]
    });
    fixture = TestBed.createComponent(ConocnenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
