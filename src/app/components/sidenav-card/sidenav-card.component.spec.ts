import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCardComponent } from './sidenav-card.component';

describe('SidenavCardComponent', () => {
  let component: SidenavCardComponent;
  let fixture: ComponentFixture<SidenavCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavCardComponent]
    });
    fixture = TestBed.createComponent(SidenavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
