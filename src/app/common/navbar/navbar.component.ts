import {
  Component,
  OnInit
} from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, null);

    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, null);
  }

}
