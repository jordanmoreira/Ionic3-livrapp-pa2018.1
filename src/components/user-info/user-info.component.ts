import { Component, Input } from '@angular/core';

import { Book } from '../../models/book.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-info',
  templateUrl: 'user-info.component.html'
})
export class UserInfoComponent {

  @Input() book: Book;
  @Input() user: User;
  @Input() isMenu: boolean = false;

  constructor() {
  }

}
