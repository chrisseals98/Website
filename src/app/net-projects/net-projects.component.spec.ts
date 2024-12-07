import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetProjectsComponent } from './net-projects.component';

describe('NetProjectsComponent', () => {
  let component: NetProjectsComponent;
  let fixture: ComponentFixture<NetProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
