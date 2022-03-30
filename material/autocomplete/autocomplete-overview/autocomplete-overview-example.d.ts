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
    stateCtrl: import("@angular/forms").FormControl;
    filteredStates: Observable<State[]>;
    states: State[];
    constructor();
    private _filterStates;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteOverviewExample, "autocomplete-overview-example", never, {}, {}, never, never>;
}
