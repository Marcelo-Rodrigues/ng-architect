import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoScriptComponent } from './geracao-script.component';

describe('GeracaoScriptComponent', () => {
  let component: GeracaoScriptComponent;
  let fixture: ComponentFixture<GeracaoScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeracaoScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeracaoScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
