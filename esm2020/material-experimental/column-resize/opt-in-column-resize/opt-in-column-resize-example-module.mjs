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
OptInColumnResizeExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: OptInColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OptInColumnResizeExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.0-rc.0", ngImport: i0, type: OptInColumnResizeExampleModule, declarations: [OptInColumnResizeExample], imports: [MatColumnResizeModule, MatTableModule], exports: [OptInColumnResizeExample] });
OptInColumnResizeExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: OptInColumnResizeExampleModule, imports: [MatColumnResizeModule, MatTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: OptInColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatColumnResizeModule, MatTableModule],
                    declarations: [OptInColumnResizeExample],
                    exports: [OptInColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVuRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFPeEUsTUFBTSxPQUFPLDhCQUE4Qjs7Z0lBQTlCLDhCQUE4QjtpSUFBOUIsOEJBQThCLGlCQUgxQix3QkFBd0IsYUFEN0IscUJBQXFCLEVBQUUsY0FBYyxhQUVyQyx3QkFBd0I7aUlBRXZCLDhCQUE4QixZQUovQixxQkFBcUIsRUFBRSxjQUFjO2dHQUlwQyw4QkFBOEI7a0JBTDFDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDO29CQUNoRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGV9IGZyb20gJy4vb3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRDb2x1bW5SZXNpemVNb2R1bGUsIE1hdFRhYmxlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbT3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlXSxcbiAgZXhwb3J0czogW09wdEluQ29sdW1uUmVzaXplRXhhbXBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE9wdEluQ29sdW1uUmVzaXplRXhhbXBsZU1vZHVsZSB7fVxuIl19