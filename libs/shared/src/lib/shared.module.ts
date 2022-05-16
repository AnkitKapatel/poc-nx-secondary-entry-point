import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_CONFIG } from '@poc/shared/services';

@NgModule({
  imports: [CommonModule],
})
export class SharedModule {
  public static setConfig(config: any): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: CUSTOM_CONFIG,
          useValue: config,
          multi: true
        }
      ],
    };
  }
}
