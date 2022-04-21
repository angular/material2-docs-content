import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop disabled
 */
export declare class CdkDragDropDisabledExample {
    items: {
        value: string;
        disabled: boolean;
    }[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropDisabledExample, "cdk-drag-drop-disabled-example", never, {}, {}, never, never, false>;
}
