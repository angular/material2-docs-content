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
class DefaultEnabledColumnResizeFlexExampleModule {
}
DefaultEnabledColumnResizeFlexExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DefaultEnabledColumnResizeFlexExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.7", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, declarations: [DefaultEnabledColumnResizeFlexExample], imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] });
DefaultEnabledColumnResizeFlexExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, imports: [MatDefaultEnabledColumnResizeModule, MatTableModule] });
export { DefaultEnabledColumnResizeFlexExampleModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DefaultEnabledColumnResizeFlexExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatTableModule],
                    declarations: [DefaultEnabledColumnResizeFlexExample],
                    exports: [DefaultEnabledColumnResizeFlexExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMscUNBQXFDLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFFbkcsTUFLYSwyQ0FBMkM7OytJQUEzQywyQ0FBMkM7Z0pBQTNDLDJDQUEyQyxpQkFIdkMscUNBQXFDLGFBRDFDLG1DQUFtQyxFQUFFLGNBQWMsYUFFbkQscUNBQXFDO2dKQUVwQywyQ0FBMkMsWUFKNUMsbUNBQW1DLEVBQUUsY0FBYztTQUlsRCwyQ0FBMkM7a0dBQTNDLDJDQUEyQztrQkFMdkQsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxjQUFjLENBQUM7b0JBQzlELFlBQVksRUFBRSxDQUFDLHFDQUFxQyxDQUFDO29CQUNyRCxPQUFPLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztpQkFDakQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZX0gZnJvbSAnLi9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1mbGV4LWV4YW1wbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGUsIE1hdFRhYmxlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZV0sXG4gIGV4cG9ydHM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhFeGFtcGxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZU1vZHVsZSB7fVxuIl19