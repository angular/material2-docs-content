import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Plain input autocomplete
 */
export declare class AutocompletePlainInputExample implements OnInit {
    control: FormControl<string | null>;
    streets: string[];
    filteredStreets: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    private _normalizeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompletePlainInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompletePlainInputExample, "autocomplete-plain-input-example", never, {}, {}, never, never, false>;
}
