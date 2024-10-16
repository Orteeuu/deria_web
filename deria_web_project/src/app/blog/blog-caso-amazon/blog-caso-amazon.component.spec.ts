import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCasoAmazonComponent } from './blog-caso-amazon.component';

describe('BlogCasoAmazonComponent', () => {
  let component: BlogCasoAmazonComponent;
  let fixture: ComponentFixture<BlogCasoAmazonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCasoAmazonComponent]
    });
    fixture = TestBed.createComponent(BlogCasoAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
