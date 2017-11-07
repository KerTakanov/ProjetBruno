import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item/list-item';
import { ListComponent } from './list/list';
import { CorpPageComponent } from './corp-page/corp-page';
@NgModule({
	declarations: [ListItemComponent,
    ListComponent,
    CorpPageComponent],
	imports: [],
	exports: [ListItemComponent,
    ListComponent,
    CorpPageComponent]
})
export class ComponentsModule {}
