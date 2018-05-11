import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * @title Filter autocomplete
 */
export declare class AutocompleteFilterExample implements OnInit {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    filter(val: string): string[];
}
