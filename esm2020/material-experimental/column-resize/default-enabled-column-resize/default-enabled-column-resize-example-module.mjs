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
DefaultEnabledColumnResizeExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DefaultEnabledColumnResizeExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], exports: [DefaultEnabledColumnResizeExample] });
DefaultEnabledColumnResizeExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, imports: [MatDefaultEnabledColumnResizeModule, MatTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatTableModule],
                    declarations: [DefaultEnabledColumnResizeExample],
                    exports: [DefaultEnabledColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFPMUYsTUFBTSxPQUFPLHVDQUF1Qzs7MklBQXZDLHVDQUF1Qzs0SUFBdkMsdUNBQXVDLGlCQUhuQyxpQ0FBaUMsYUFEdEMsbUNBQW1DLEVBQUUsY0FBYyxhQUVuRCxpQ0FBaUM7NElBRWhDLHVDQUF1QyxZQUp4QyxtQ0FBbUMsRUFBRSxjQUFjO2tHQUlsRCx1Q0FBdUM7a0JBTG5ELFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsY0FBYyxDQUFDO29CQUM5RCxZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZX0gZnJvbSAnLi9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLCBNYXRUYWJsZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZV0sXG4gIGV4cG9ydHM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVNb2R1bGUge31cbiJdfQ==