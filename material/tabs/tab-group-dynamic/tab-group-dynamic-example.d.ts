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
    static ngFactoryDef: i0.ɵɵFactoryDef<TabGroupDynamicExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<TabGroupDynamicExample, "tab-group-dynamic-example", never, {}, {}, never>;
}
