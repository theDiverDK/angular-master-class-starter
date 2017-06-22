import { ROOT_REDUCER, ApplicationState } from './root-reducer';
import { createStore, Store, combineReducers } from 'redux';
import { InjectionToken } from "@angular/core";

export const APP_STORE = new InjectionToken<Store<ApplicationState>>('appStore');

export function appStoreFactory(): Store<ApplicationState> {
  return createStore(combineReducers(ROOT_REDUCER)) as Store<ApplicationState>;
}

