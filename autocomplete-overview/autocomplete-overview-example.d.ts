import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
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
}
