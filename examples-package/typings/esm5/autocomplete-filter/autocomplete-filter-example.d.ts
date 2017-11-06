import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
/**
 * @title Filter autocomplete
 */
export declare class AutocompleteFilterExample {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    filter(val: string): string[];
}
