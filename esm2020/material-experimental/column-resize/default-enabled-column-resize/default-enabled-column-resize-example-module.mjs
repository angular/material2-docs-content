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
import { DefaultEnabledColumnResizeExample } from './default-enabled-column-resize-example';
import * as i0 from "@angular/core";
export class DefaultEnabledColumnResizeExampleModule {
}
DefaultEnabledColumnResizeExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DefaultEnabledColumnResizeExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule], exports: [DefaultEnabledColumnResizeExample] });
DefaultEnabledColumnResizeExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule],
                    declarations: [DefaultEnabledColumnResizeExample],
                    exports: [DefaultEnabledColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxtQ0FBbUMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRWpHLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQU8xRixNQUFNLE9BQU8sdUNBQXVDOzt5SUFBdkMsdUNBQXVDOzBJQUF2Qyx1Q0FBdUMsaUJBSG5DLGlDQUFpQyxhQUR0QyxtQ0FBbUMsRUFBRSxvQkFBb0IsYUFFekQsaUNBQWlDOzBJQUVoQyx1Q0FBdUMsWUFKeEMsbUNBQW1DLEVBQUUsb0JBQW9CO2dHQUl4RCx1Q0FBdUM7a0JBTG5ELFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsb0JBQW9CLENBQUM7b0JBQ3BFLFlBQVksRUFBRSxDQUFDLGlDQUFpQyxDQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeVRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZX0gZnJvbSAnLi9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLCBNYXRMZWdhY3lUYWJsZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZV0sXG4gIGV4cG9ydHM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVNb2R1bGUge31cbiJdfQ==