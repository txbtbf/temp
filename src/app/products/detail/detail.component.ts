import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productCode: number;

  constructor(private _activatedRoute : ActivatedRoute, private _router : Router) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) => {
      this.productCode = data.id;
    })
  }

  backtolist() {
    this._router.navigate(['/products']);
  }

}
