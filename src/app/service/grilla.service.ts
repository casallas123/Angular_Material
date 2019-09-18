import { Injectable } from '@angular/core';
import { Grilla} from '../dto/grilla';

@Injectable({
  providedIn: 'root'
})
export class GrillaService {
    
    grilla: Grilla[] = [
        {text: 'P1', cols: 1, rows: 2, color: '#e1cdcd '},
        {text: 'P2', cols: 1, rows: 2, color: '#784545 '},
        {text: 'P3', cols: 1, rows: 2, color: '#52ba7b '},
        {text: 'P4', cols: 1, rows: 2, color: '#DDBDF1'},
      ];

  constructor() { }


  getGrilla() {
    return this.grilla;
  }
}