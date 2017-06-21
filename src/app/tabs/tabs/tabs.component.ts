import { TabComponent } from './../tab/tab.component';
import { Component, OnInit, QueryList, ContentChildren, AfterContentInit } from '@angular/core';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
  constructor() { }

  ngAfterContentInit() {
    this.selectTab(this.tabs.first);
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    selectedTab.selected = true;
  }
}
