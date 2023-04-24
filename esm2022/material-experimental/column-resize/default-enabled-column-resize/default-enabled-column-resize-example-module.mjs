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
class DefaultEnabledColumnResizeExampleModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule, MatTableModule], exports: [DefaultEnabledColumnResizeExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, imports: [MatDefaultEnabledColumnResizeModule, MatTableModule] }); }
}
export { DefaultEnabledColumnResizeExampleModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DefaultEnabledColumnResizeExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDefaultEnabledColumnResizeModule, MatTableModule],
                    declarations: [DefaultEnabledColumnResizeExample],
                    exports: [DefaultEnabledColumnResizeExample],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFMUYsTUFLYSx1Q0FBdUM7bUhBQXZDLHVDQUF1QztvSEFBdkMsdUNBQXVDLGlCQUhuQyxpQ0FBaUMsYUFEdEMsbUNBQW1DLEVBQUUsY0FBYyxhQUVuRCxpQ0FBaUM7b0hBRWhDLHVDQUF1QyxZQUp4QyxtQ0FBbUMsRUFBRSxjQUFjOztTQUlsRCx1Q0FBdUM7Z0dBQXZDLHVDQUF1QztrQkFMbkQsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxjQUFjLENBQUM7b0JBQzlELFlBQVksRUFBRSxDQUFDLGlDQUFpQyxDQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVFeGFtcGxlfSBmcm9tICcuL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWV4YW1wbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGUsIE1hdFRhYmxlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVFeGFtcGxlXSxcbiAgZXhwb3J0czogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZU1vZHVsZSB7fVxuIl19