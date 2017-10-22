import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenteCriacaoItemComponent } from './assistente-criacao-item.component';

describe('MenuItemComponent', () => {
  let component: AssistenteCriacaoItemComponent;
  let fixture: ComponentFixture<AssistenteCriacaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistenteCriacaoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistenteCriacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
