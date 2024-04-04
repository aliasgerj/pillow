import {InjectionToken} from "@angular/core";

export interface Info {
  name: string;
  country: string;
}

// create a token
export const INFO_TOKEN = new InjectionToken<Info>('INFO_TOKEN');
