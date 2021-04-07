import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropCustomPreviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropCustomPreviewExample, "cdk-drag-drop-custom-preview-example", never, {}, {}, never, never>;
}
