import { NgModule } from '@angular/core';
import { CustomLoggedHeaderComponent } from './custom-logged-header/custom-logged-header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
@NgModule({
	declarations: [CustomLoggedHeaderComponent,
    UserInfoComponent,
    UserMenuComponent],
	imports: [],
	exports: [CustomLoggedHeaderComponent,
    UserInfoComponent,
    UserMenuComponent]
})
export class ComponentsModule {}
