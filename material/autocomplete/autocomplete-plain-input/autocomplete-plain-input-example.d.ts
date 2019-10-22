import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
    static ngFactoryDef: i0.ɵɵFactoryDef<AutocompletePlainInputExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<AutocompletePlainInputExample, "autocomplete-plain-input-example", never, {}, {}, never>;
}
