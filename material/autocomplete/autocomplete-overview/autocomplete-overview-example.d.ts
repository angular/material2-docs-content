import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface State {
    flag: string;
    name: string;
    population: string;
}
/**
 * @title Autocomplete overview
 */
export declare class AutocompleteOverviewExample {
    stateCtrl: FormControl;
    filteredStates: Observable<State[]>;
    states: State[];
    constructor();
    private _filterStates;
    static ɵfac: i0.ɵɵFactoryDef<AutocompleteOverviewExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AutocompleteOverviewExample, "autocomplete-overview-example", never, {}, {}, never>;
}
