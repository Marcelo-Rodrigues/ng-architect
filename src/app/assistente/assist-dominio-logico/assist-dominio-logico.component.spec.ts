import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistDominioLogicoComponent } from './assist-dominio-logico.component';

describe('AssistDominioLogicoComponent', () => {
  let component: AssistDominioLogicoComponent;
  let fixture: ComponentFixture<AssistDominioLogicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistDominioLogicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistDominioLogicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
