import { TestBed, inject } from '@angular/core/testing';

import { GeracaoScriptService } from './geracao-script.service';

describe('GeracaoScriptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeracaoScriptService]
    });
  });

  it('should be created', inject([GeracaoScriptService], (service: GeracaoScriptService) => {
    expect(service).toBeTruthy();
  }));
});
