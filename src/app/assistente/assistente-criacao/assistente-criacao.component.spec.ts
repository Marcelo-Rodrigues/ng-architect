import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenteCriacaoComponent } from './assistente-criacao.component';

describe('AssistenteCriacaoComponent', () => {
  let component: AssistenteCriacaoComponent;
  let fixture: ComponentFixture<AssistenteCriacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistenteCriacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistenteCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
