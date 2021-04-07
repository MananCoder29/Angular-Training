import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-vs-property-binding',
  templateUrl: './interpolation-vs-property-binding.component.html',
  styleUrls: ['./interpolation-vs-property-binding.component.css']
})
export class InterpolationVsPropertyBindingComponent implements OnInit {
  f1:boolean = false;
  f2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
