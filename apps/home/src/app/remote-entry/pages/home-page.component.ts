import { Component } from '@angular/core';

import { BannerComponent } from '../components/banner.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [BannerComponent],
  template: `<app-banner />`,
})
export class HomePageComponent {}
