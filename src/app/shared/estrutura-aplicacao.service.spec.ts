import { TestBed, inject } from '@angular/core/testing';

import { EstruturaAplicacaoService } from './estrutura-aplicacao.service';

describe('EstruturaAplicacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstruturaAplicacaoService]
    });
  });

  it('should be created', inject([EstruturaAplicacaoService], (service: EstruturaAplicacaoService) => {
    expect(service).toBeTruthy();
  }));
});
