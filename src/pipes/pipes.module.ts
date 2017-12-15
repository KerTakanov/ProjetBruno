import { NgModule } from '@angular/core';
import { SearchbarFilterPipe } from './searchbar-filter/searchbar-filter';
import { DataPipe } from './data/data';
import { SortlistPipe } from './sortlist/sortlist';
import { CorpMapToIterablePipe } from './corp-map-to-iterable/corp-map-to-iterable';
@NgModule({
	declarations: [SearchbarFilterPipe,
    DataPipe,
    SortlistPipe,
    CorpMapToIterablePipe],
	imports: [],
	exports: [SearchbarFilterPipe,
    DataPipe,
    SortlistPipe,
    CorpMapToIterablePipe]
})
export class PipesModule {}
