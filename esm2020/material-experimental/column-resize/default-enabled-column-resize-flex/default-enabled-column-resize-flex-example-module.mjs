/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { MatDefaultEnabledColumnResizeModule } from '@angular/material-experimental/column-resize';
import { DefaultEnabledColumnResizeFlexExample } from './default-enabled-column-resize-flex-example';
import * as i0 from "@angular/core";
export class DefaultEnabledColumnResizeFlexExampleModule {
}
DefaultEnabledColumnResizeFlexExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DefaultEnabledColumnResizeFlexExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, declarations: [DefaultEnabledColumnResizeFlexExample], imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule], exports: [DefaultEnabledColumnResizeFlexExample] });
DefaultEnabledColumnResizeFlexExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule],
                    declarations: [DefaultEnabledColumnResizeFlexExample],
                    exports: [DefaultEnabledColumnResizeFlexExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxtQ0FBbUMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRWpHLE9BQU8sRUFBQyxxQ0FBcUMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDOztBQU9uRyxNQUFNLE9BQU8sMkNBQTJDOzt3SUFBM0MsMkNBQTJDO3lJQUEzQywyQ0FBMkMsaUJBSHZDLHFDQUFxQyxhQUQxQyxtQ0FBbUMsRUFBRSxvQkFBb0IsYUFFekQscUNBQXFDO3lJQUVwQywyQ0FBMkMsWUFKNUMsbUNBQW1DLEVBQUUsb0JBQW9COzJGQUl4RCwyQ0FBMkM7a0JBTHZELFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsb0JBQW9CLENBQUM7b0JBQ3BFLFlBQVksRUFBRSxDQUFDLHFDQUFxQyxDQUFDO29CQUNyRCxPQUFPLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztpQkFDakQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeVRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGV9IGZyb20gJy4vZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLCBNYXRMZWdhY3lUYWJsZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGVdLFxuICBleHBvcnRzOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGVNb2R1bGUge31cbiJdfQ==