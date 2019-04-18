import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-alimentsmanagement',
  templateUrl: './alimentsmanagement.component.html',
  styleUrls: ['./alimentsmanagement.component.css']
})
export class AlimentsmanagementComponent implements OnInit {

  constructor(private route: Router,
              private router: ActivatedRoute) {  }

  ngOnInit() {
  }

  showAdd() {
    this.route.navigate(['addaliment'], {relativeTo: this.router });
  }


  showDelete() {
    this.route.navigate(['deletealiment'], {relativeTo: this.router });
  }


}
