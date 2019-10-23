import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Tab group with dynamically changing tabs
 */
export declare class TabGroupDynamicExample {
    tabs: string[];
    selected: FormControl;
    addTab(selectAfterAdding: boolean): void;
    removeTab(index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<TabGroupDynamicExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TabGroupDynamicExample, "tab-group-dynamic-example", never, {}, {}, never>;
}
