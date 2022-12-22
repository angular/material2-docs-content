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
import { DefaultEnabledColumnResizeFlexExample } from './default-enabled-column-resize-flex-example';
import * as i0 from "@angular/core";
export class DefaultEnabledColumnResizeFlexExampleModule {
}
DefaultEnabledColumnResizeFlexExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DefaultEnabledColumnResizeFlexExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, declarations: [DefaultEnabledColumnResizeFlexExample], imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] });
DefaultEnabledColumnResizeFlexExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, imports: [MatDefaultEnabledColumnResizeModule, MatTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatTableModule],
                    declarations: [DefaultEnabledColumnResizeFlexExample],
                    exports: [DefaultEnabledColumnResizeFlexExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMscUNBQXFDLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFPbkcsTUFBTSxPQUFPLDJDQUEyQzs7K0lBQTNDLDJDQUEyQztnSkFBM0MsMkNBQTJDLGlCQUh2QyxxQ0FBcUMsYUFEMUMsbUNBQW1DLEVBQUUsY0FBYyxhQUVuRCxxQ0FBcUM7Z0pBRXBDLDJDQUEyQyxZQUo1QyxtQ0FBbUMsRUFBRSxjQUFjO2tHQUlsRCwyQ0FBMkM7a0JBTHZELFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsY0FBYyxDQUFDO29CQUM5RCxZQUFZLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztvQkFDckQsT0FBTyxFQUFFLENBQUMscUNBQXFDLENBQUM7aUJBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGV9IGZyb20gJy4vZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLCBNYXRUYWJsZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGVdLFxuICBleHBvcnRzOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGVNb2R1bGUge31cbiJdfQ==