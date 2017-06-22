import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';

export interface EventBusArgs {
  type: string;
  data: any;
}

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this._messages$.next({
      type: eventType,
      data: data
    });
  }

  observe(eventType: string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
