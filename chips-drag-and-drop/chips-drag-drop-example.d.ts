import { CdkDragDrop } from '@angular/cdk/drag-drop';
export interface Vegetable {
    name: string;
}
/**
 * @title Chips Drag and Drop
 */
export declare class ChipsDragDropExample {
    vegetables: Vegetable[];
    drop(event: CdkDragDrop<Vegetable[]>): void;
}
