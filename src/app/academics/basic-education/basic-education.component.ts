import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
@Component({
  selector: 'app-basic-education',
  templateUrl: './basic-education.component.html',
  styleUrls: ['./basic-education.component.css']
})
export class BasicEducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const el = document.querySelectorAll('.tabs');
    M.Tabs.init(el, null);

    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, null);
  }

}
