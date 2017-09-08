import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistSubdominioComponent } from './assist-subdominio.component';

describe('AssistSubdominioComponent', () => {
  let component: AssistSubdominioComponent;
  let fixture: ComponentFixture<AssistSubdominioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistSubdominioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistSubdominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
