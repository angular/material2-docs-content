import { CdkDragDrop, CdkDrag } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop enter predicate
 */
export declare class CdkDragDropEnterPredicateExample {
    all: number[];
    even: number[];
    drop(event: CdkDragDrop<number[]>): void;
    /** Predicate function that only allows even numbers to be dropped into a list. */
    evenPredicate(item: CdkDrag<number>): boolean;
    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CdkDragDropEnterPredicateExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkDragDropEnterPredicateExample, "cdk-drag-drop-enter-predicate-example", never, {}, {}, never>;
}
