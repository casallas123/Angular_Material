import { Component, OnInit } from '@angular/core';
import { Grilla } from '../dto/grilla';
import { GrillaService } from '../service/grilla.service';

@Component({
  selector: 'app-component-service',
  templateUrl: './component-service.component.html',
  styleUrls: ['./component-service.component.css']
})
export class ComponentServiceComponent implements OnInit {

grilla: Grilla[];

  constructor(private grillitaservice:GrillaService) { 
    this.grilla = this.grillitaservice.getGrilla();
  }

  ngOnInit() {
  }

}
