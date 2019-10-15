import { Component } from '@angular/core';
import { UIService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  loader = false;

  constructor(private uiService: UIService) {
    uiService.getLoader().subscribe((status) => {
      this.loader = status;
    });
  }

}
