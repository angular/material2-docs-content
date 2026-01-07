import * as i0 from '@angular/core';
import { AfterViewInit, OnDestroy, TemplateRef } from '@angular/core';
import { CdkDragDrop, CdkDrag } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop position locking
 */
declare class CdkDragDropAxisLockExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropAxisLockExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropAxisLockExample, "cdk-drag-drop-axis-lock-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop boundary
 */
declare class CdkDragDropBoundaryExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropBoundaryExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropBoundaryExample, "cdk-drag-drop-boundary-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop connected sorting group
 */
declare class CdkDragDropConnectedSortingGroupExample {
    todo: string[];
    done: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropConnectedSortingGroupExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropConnectedSortingGroupExample, "cdk-drag-drop-connected-sorting-group-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop connected sorting
 */
declare class CdkDragDropConnectedSortingExample {
    todo: string[];
    done: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropConnectedSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropConnectedSortingExample, "cdk-drag-drop-connected-sorting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop custom placeholder
 */
declare class CdkDragDropCustomPlaceholderExample {
    movies: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropCustomPlaceholderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropCustomPlaceholderExample, "cdk-drag-drop-custom-placeholder-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop custom preview
 */
declare class CdkDragDropCustomPreviewExample {
    movies: {
        title: string;
        poster: string;
    }[];
    drop(event: CdkDragDrop<{
        title: string;
        poster: string;
    }[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropCustomPreviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropCustomPreviewExample, "cdk-drag-drop-custom-preview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Delayed dragging
 */
declare class CdkDragDropDelayExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropDelayExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropDelayExample, "cdk-drag-drop-delay-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop disabled sorting
 */
declare class CdkDragDropDisabledSortingExample {
    items: string[];
    basket: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropDisabledSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropDisabledSortingExample, "cdk-drag-drop-disabled-sorting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop disabled
 */
declare class CdkDragDropDisabledExample {
    items: {
        value: string;
        disabled: boolean;
    }[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropDisabledExample, "cdk-drag-drop-disabled-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop enter predicate
 */
declare class CdkDragDropEnterPredicateExample {
    all: number[];
    even: number[];
    drop(event: CdkDragDrop<number[]>): void;
    /** Predicate function that only allows even numbers to be dropped into a list. */
    evenPredicate(item: CdkDrag<number>): boolean;
    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropEnterPredicateExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropEnterPredicateExample, "cdk-drag-drop-enter-predicate-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Programmatically setting the free drag position
 */
declare class CdkDragDropFreeDragPositionExample {
    dragPosition: {
        x: number;
        y: number;
    };
    changePosition(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropFreeDragPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropFreeDragPositionExample, "cdk-drag-drop-free-drag-position-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop with a handle
 */
declare class CdkDragDropHandleExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropHandleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropHandleExample, "cdk-drag-drop-handle-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop horizontal sorting
 */
declare class CdkDragDropHorizontalSortingExample {
    timePeriods: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropHorizontalSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropHorizontalSortingExample, "cdk-drag-drop-horizontal-sorting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic Drag&Drop
 */
declare class CdkDragDropOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropOverviewExample, "cdk-drag-drop-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop with alternate root element
 */
declare class CdkDragDropRootElementExample implements AfterViewInit, OnDestroy {
    private _injector;
    private _viewContainerRef;
    _dialogTemplate: TemplateRef<any>;
    private _overlayRef;
    private _portal;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropRootElementExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropRootElementExample, "cdk-drag-drop-root-element-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop sorting
 */
declare class CdkDragDropSortingExample {
    movies: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropSortingExample, "cdk-drag-drop-sorting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop sort predicate
 */
declare class CdkDragDropSortPredicateExample {
    numbers: number[];
    drop(event: CdkDragDrop<unknown>): void;
    /**
     * Predicate function that only allows even numbers to be
     * sorted into even indices and odd numbers at odd indices.
     */
    sortPredicate(index: number, item: CdkDrag<number>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropSortPredicateExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropSortPredicateExample, "cdk-drag-drop-sort-predicate-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop horizontal wrapping list
 */
declare class CdkDragDropMixedSortingExample {
    items: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropMixedSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropMixedSortingExample, "cdk-drag-drop-mixed-sorting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop copy between lists
 */
declare class CdkDragDropCopyListExample {
    products: string[];
    cart: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropCopyListExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropCopyListExample, "cdk-drag-drop-copy-list-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Drag&Drop scrollable
 */
declare class CdkDragDropScrollableExample {
    elementNames: string[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropScrollableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropScrollableExample, "cdk-drag-drop-scrollable-example", never, {}, {}, never, never, true, never>;
}

export { CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropCopyListExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledExample, CdkDragDropDisabledSortingExample, CdkDragDropEnterPredicateExample, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropMixedSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropScrollableExample, CdkDragDropSortPredicateExample, CdkDragDropSortingExample };
