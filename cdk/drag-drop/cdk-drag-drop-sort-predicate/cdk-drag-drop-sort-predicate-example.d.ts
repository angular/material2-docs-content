import { CdkDragDrop, CdkDrag } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop sort predicate
 */
export declare class CdkDragDropSortPredicateExample {
    numbers: number[];
    drop(event: CdkDragDrop<unknown>): void;
    /**
     * Predicate function that only allows even numbers to be
     * sorted into even indices and odd numbers at odd indices.
     */
    sortPredicate(index: number, item: CdkDrag<number>): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CdkDragDropSortPredicateExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkDragDropSortPredicateExample, "cdk-drag-drop-sort-predicate-example", never, {}, {}, never, never>;
}
