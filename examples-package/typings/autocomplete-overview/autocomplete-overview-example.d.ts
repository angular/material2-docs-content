import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
export declare class State {
    name: string;
    population: string;
    flag: string;
    constructor(name: string, population: string, flag: string);
}
/**
 * @title Autocomplete overview
 */
export declare class AutocompleteOverviewExample {
    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;
    states: State[];
    constructor();
    filterStates(name: string): State[];
}
