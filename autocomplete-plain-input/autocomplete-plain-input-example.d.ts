import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * @title Plain input autocomplete
 */
export declare class AutocompletePlainInputExample implements OnInit {
    control: FormControl;
    streets: string[];
    filteredStreets: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    private _normalizeValue;
}
