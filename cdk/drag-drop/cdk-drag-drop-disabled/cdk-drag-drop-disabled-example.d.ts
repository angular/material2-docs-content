import { CdkDragDrop } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop disabled
 */
export declare class CdkDragDropDisabledExample {
    items: {
        value: string;
        disabled: boolean;
    }[];
    drop(event: CdkDragDrop<string[]>): void;
}
