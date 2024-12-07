import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaGameComponent } from './java-game.component';

describe('JavaGameComponent', () => {
  let component: JavaGameComponent;
  let fixture: ComponentFixture<JavaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
