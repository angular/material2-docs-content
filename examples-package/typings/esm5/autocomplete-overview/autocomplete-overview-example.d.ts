import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
/**
 * @title Autocomplete overview
 */
export declare class AutocompleteOverviewExample {
    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;
    states: any[];
    constructor();
    filterStates(name: string): any[];
}
