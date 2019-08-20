import { CdkDragDrop } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop custom preview
 */
export declare class CdkDragDropCustomPreviewExample {
    movies: {
        title: string;
        poster: string;
    }[];
    drop(event: CdkDragDrop<{
        title: string;
        poster: string;
    }[]>): void;
}
