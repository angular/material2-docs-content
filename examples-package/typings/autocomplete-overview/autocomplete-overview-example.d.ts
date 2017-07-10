import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
/**
 * @title Basic autocomplete
 */
export declare class AutocompleteOverviewExample {
    stateCtrl: FormControl;
    filteredStates: any;
    states: string[];
    constructor();
    filterStates(val: string): string[];
}
