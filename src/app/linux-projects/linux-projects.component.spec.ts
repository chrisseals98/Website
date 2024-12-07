import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxProjectsComponent } from './linux-projects.component';

describe('LinuxProjectsComponent', () => {
  let component: LinuxProjectsComponent;
  let fixture: ComponentFixture<LinuxProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
