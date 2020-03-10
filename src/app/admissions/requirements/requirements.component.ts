import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const el = document.querySelectorAll('.tabs');
    M.Tabs.init(el, null);
  }

}
