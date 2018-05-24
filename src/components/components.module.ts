import { NgModule } from '@angular/core';
import { CustomLoggedHeaderComponent } from './custom-logged-header/custom-logged-header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MessageBoxComponent } from './message-box/message-box.component';
@NgModule({
	declarations: [CustomLoggedHeaderComponent,
    UserInfoComponent,
    UserMenuComponent,
    MessageBoxComponent],
	imports: [],
	exports: [CustomLoggedHeaderComponent,
    UserInfoComponent,
    UserMenuComponent,
    MessageBoxComponent]
})
export class ComponentsModule {}
