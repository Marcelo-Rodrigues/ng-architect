import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaArquivoComponent } from './carga-arquivo.component';

describe('CargaArquivoComponent', () => {
  let component: CargaArquivoComponent;
  let fixture: ComponentFixture<CargaArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaArquivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
