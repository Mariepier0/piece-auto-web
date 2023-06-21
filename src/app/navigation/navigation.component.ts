import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private toastr: ToastrService) { }
 
  showSuccess() {
    this.toastr.success("everything is broken", "Major Error", {
      timeOut: 10000
    });
  }
}
