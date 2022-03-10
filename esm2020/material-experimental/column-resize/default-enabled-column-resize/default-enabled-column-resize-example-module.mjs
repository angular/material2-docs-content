/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDefaultEnabledColumnResizeModule } from '@angular/material-experimental/column-resize';
import { DefaultEnabledColumnResizeExample } from './default-enabled-column-resize-example';
import * as i0 from "@angular/core";
export class DefaultEnabledColumnResizeExampleModule {
}
DefaultEnabledColumnResizeExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DefaultEnabledColumnResizeExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], exports: [DefaultEnabledColumnResizeExample] });
DefaultEnabledColumnResizeExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, imports: [[MatDefaultEnabledColumnResizeModule, MatTableModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatTableModule],
                    declarations: [DefaultEnabledColumnResizeExample],
                    exports: [DefaultEnabledColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFPMUYsTUFBTSxPQUFPLHVDQUF1Qzs7MklBQXZDLHVDQUF1Qzs0SUFBdkMsdUNBQXVDLGlCQUhuQyxpQ0FBaUMsYUFEdEMsbUNBQW1DLEVBQUUsY0FBYyxhQUVuRCxpQ0FBaUM7NElBRWhDLHVDQUF1QyxZQUp6QyxDQUFDLG1DQUFtQyxFQUFFLGNBQWMsQ0FBQztrR0FJbkQsdUNBQXVDO2tCQUxuRCxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG1DQUFtQyxFQUFFLGNBQWMsQ0FBQztvQkFDOUQsWUFBWSxFQUFFLENBQUMsaUNBQWlDLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGV9IGZyb20gJy4vZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZSwgTWF0VGFibGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVdLFxuICBleHBvcnRzOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVFeGFtcGxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVFeGFtcGxlTW9kdWxlIHt9XG4iXX0=