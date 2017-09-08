import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistRotaComponent } from './assist-rota.component';

describe('AssistRotaComponent', () => {
  let component: AssistRotaComponent;
  let fixture: ComponentFixture<AssistRotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistRotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
