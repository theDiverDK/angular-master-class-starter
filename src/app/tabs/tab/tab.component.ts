import { TabsComponent } from './../tabs/tabs.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit {

  @Input() selected: boolean = false;
  @Input() title: string = '';

  constructor(private parent: TabsComponent) { }

  ngOnInit() {
    this.parent.addTab(this);
  }

}
