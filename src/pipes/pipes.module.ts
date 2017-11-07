import { NgModule } from '@angular/core';
import { SearchbarFilterPipe } from './searchbar-filter/searchbar-filter';
import { DataPipe } from './data/data';
import { SortlistPipe } from './sortlist/sortlist';
@NgModule({
	declarations: [SearchbarFilterPipe,
    DataPipe,
    SortlistPipe],
	imports: [],
	exports: [SearchbarFilterPipe,
    DataPipe,
    SortlistPipe]
})
export class PipesModule {}
