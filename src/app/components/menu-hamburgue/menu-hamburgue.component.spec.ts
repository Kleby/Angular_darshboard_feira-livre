import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburgueComponent } from './menu-hamburgue.component';

describe('MenuHamburgueComponent', () => {
  let component: MenuHamburgueComponent;
  let fixture: ComponentFixture<MenuHamburgueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHamburgueComponent]
    });
    fixture = TestBed.createComponent(MenuHamburgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
