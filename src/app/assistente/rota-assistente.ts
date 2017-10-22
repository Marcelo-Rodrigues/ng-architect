import { Route, Routes } from '@angular/router';

export class RotaAssistente implements Route {
  public outlet?: string;
  public redirectTo?: string;
  public children?: Routes;
  public stepId?: string;
  public component?: any;
  constructor(public path: string) { }
}
