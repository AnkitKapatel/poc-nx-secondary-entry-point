import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FusionConfig } from './fusion.config';

export const CUSTOM_CONFIG = new InjectionToken('CustomConfig');
export let counter = 0;

@Injectable({providedIn: 'root'})
export class ConfigurationService {

  public appSettings: string;
  private _uiSettingsSubject: BehaviorSubject<string> = new BehaviorSubject("");
  public readonly _defaultUiSettings: string;

  constructor( private readonly _router: Router, @Inject(CUSTOM_CONFIG) private readonly _config:FusionConfig) {
    const isConfigArray = Array.isArray(_config);
    this.appSettings = isConfigArray ?  _config[0].appSettings:  _config.appSettings;
    this._defaultUiSettings = isConfigArray ?  _config[0].uiSettings : _config.uiSettings;
    counter++;
  }


  get() {
    console.log(counter, this.appSettings);
    return this.appSettings;
  }

  set uiSettings(value)
  {
        const config = this._config.uiSettings;
        this._uiSettingsSubject.next(config);
  }

  get uiSettings(): any | Observable<string>
  {
    return of(this._config.uiSettings);
  }
}


