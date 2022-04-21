import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Table with re-orderable columns
 */
export declare class TableReorderableExample {
    columns: string[];
    dataSource: PeriodicElement[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableReorderableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableReorderableExample, "table-reorderable-example", never, {}, {}, never, never, false>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
