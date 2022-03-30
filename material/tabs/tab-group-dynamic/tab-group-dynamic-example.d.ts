import * as i0 from "@angular/core";
/**
 * @title Tab group with dynamically changing tabs
 */
export declare class TabGroupDynamicExample {
    tabs: string[];
    selected: import("@angular/forms").FormControl;
    addTab(selectAfterAdding: boolean): void;
    removeTab(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupDynamicExample, "tab-group-dynamic-example", never, {}, {}, never, never>;
}
