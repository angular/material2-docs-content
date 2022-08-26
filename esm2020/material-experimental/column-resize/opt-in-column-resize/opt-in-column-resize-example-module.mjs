/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { MatColumnResizeModule } from '@angular/material-experimental/column-resize';
import { OptInColumnResizeExample } from './opt-in-column-resize-example';
import * as i0 from "@angular/core";
export class OptInColumnResizeExampleModule {
}
OptInColumnResizeExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: OptInColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OptInColumnResizeExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: OptInColumnResizeExampleModule, declarations: [OptInColumnResizeExample], imports: [MatColumnResizeModule, MatLegacyTableModule], exports: [OptInColumnResizeExample] });
OptInColumnResizeExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: OptInColumnResizeExampleModule, imports: [MatColumnResizeModule, MatLegacyTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: OptInColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatColumnResizeModule, MatLegacyTableModule],
                    declarations: [OptInColumnResizeExample],
                    exports: [OptInColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOztBQU94RSxNQUFNLE9BQU8sOEJBQThCOzsySEFBOUIsOEJBQThCOzRIQUE5Qiw4QkFBOEIsaUJBSDFCLHdCQUF3QixhQUQ3QixxQkFBcUIsRUFBRSxvQkFBb0IsYUFFM0Msd0JBQXdCOzRIQUV2Qiw4QkFBOEIsWUFKL0IscUJBQXFCLEVBQUUsb0JBQW9COzJGQUkxQyw4QkFBOEI7a0JBTDFDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLENBQUM7b0JBQ3RELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeVRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktdGFibGUnO1xuaW1wb3J0IHtNYXRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGV9IGZyb20gJy4vb3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRDb2x1bW5SZXNpemVNb2R1bGUsIE1hdExlZ2FjeVRhYmxlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbT3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlXSxcbiAgZXhwb3J0czogW09wdEluQ29sdW1uUmVzaXplRXhhbXBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE9wdEluQ29sdW1uUmVzaXplRXhhbXBsZU1vZHVsZSB7fVxuIl19