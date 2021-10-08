/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatColumnResizeModule } from '@angular/material-experimental/column-resize';
import { OptInColumnResizeExample } from './opt-in-column-resize-example';
import * as i0 from "@angular/core";
export class OptInColumnResizeExampleModule {
}
OptInColumnResizeExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: OptInColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OptInColumnResizeExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: OptInColumnResizeExampleModule, declarations: [OptInColumnResizeExample], imports: [MatColumnResizeModule,
        MatTableModule], exports: [OptInColumnResizeExample] });
OptInColumnResizeExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: OptInColumnResizeExampleModule, imports: [[
            MatColumnResizeModule,
            MatTableModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: OptInColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatColumnResizeModule,
                        MatTableModule,
                    ],
                    declarations: [OptInColumnResizeExample],
                    exports: [OptInColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVuRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFVeEUsTUFBTSxPQUFPLDhCQUE4Qjs7bUlBQTlCLDhCQUE4QjtvSUFBOUIsOEJBQThCLGlCQUgxQix3QkFBd0IsYUFIckMscUJBQXFCO1FBQ3JCLGNBQWMsYUFHTix3QkFBd0I7b0lBRXZCLDhCQUE4QixZQVBoQztZQUNQLHFCQUFxQjtZQUNyQixjQUFjO1NBQ2Y7bUdBSVUsOEJBQThCO2tCQVIxQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0Q29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7T3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlfSBmcm9tICcuL29wdC1pbi1jb2x1bW4tcmVzaXplLWV4YW1wbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Q29sdW1uUmVzaXplTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGVdLFxuICBleHBvcnRzOiBbT3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlXSxcbn0pXG5leHBvcnQgY2xhc3MgT3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlTW9kdWxlIHtcbn1cbiJdfQ==