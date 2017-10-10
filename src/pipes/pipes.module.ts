import { NgModule } from '@angular/core';
import { SearchbarFilterPipe } from './searchbar-filter/searchbar-filter';
import { DataPipe } from './data/data';
@NgModule({
	declarations: [SearchbarFilterPipe,
    DataPipe],
	imports: [],
	exports: [SearchbarFilterPipe,
    DataPipe]
})
export class PipesModule {}
