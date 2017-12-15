import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item/list-item';
import { ListComponent } from './list/list';
@NgModule({
	declarations: [ListItemComponent,
    ListComponent],
	imports: [],
	exports: [ListItemComponent,
    ListComponent]
})
export class ComponentsModule {}
