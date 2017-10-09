import { Component, OnInit, ViewChild } from '@angular/core';
import { EstruturaAplicacaoService } from '../shared/estrutura-aplicacao.service';

@Component({
  selector: 'my-carga-arquivo',
  templateUrl: './carga-arquivo.component.html',
  styleUrls: ['./carga-arquivo.component.css']
})
export class CargaArquivoComponent implements OnInit {

  configAplicacaoArquivo = '';
  configAplicacaoCache = '';
  substituicaoRealizada = false;

  @ViewChild('fileUpload')
  fileUpload: any;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService) { }

  ngOnInit() {
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      const fileReader = new FileReader();
      fileReader.readAsText(file);

      fileReader.onload =
        () => {
          this.configAplicacaoArquivo = JSON.parse(fileReader.result);
          this.configAplicacaoCache = JSON.parse(this.estruturaAplicacaoService.retornarCache());
        };
    }
  }

  substituirCache() {
    this.estruturaAplicacaoService.salvarEmCache(this.configAplicacaoArquivo);
    this.limparDados();
    this.substituicaoRealizada = true;
  }

  limparDados() {
    this.configAplicacaoArquivo = '';
    this.configAplicacaoCache = '';
    this.fileUpload.nativeElement.value = '';
  }
}
