import { FormControl } from '@angular/forms';
/**
 * @title Tag group with dynamically changing tabs
 */
export declare class TabGroupDynamicExample {
    tabs: string[];
    selected: FormControl;
    addTab(selectAfterAdding: boolean): void;
    removeTab(index: number): void;
}
