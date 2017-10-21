import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistInfoAplicacaoComponent } from './assist-info-aplicacao.component';

describe('AssistInfoAplicacaoComponent', () => {
  let component: AssistInfoAplicacaoComponent;
  let fixture: ComponentFixture<AssistInfoAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistInfoAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistInfoAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
