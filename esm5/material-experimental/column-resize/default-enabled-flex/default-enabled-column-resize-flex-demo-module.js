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
import { DefaultEnabledColumnResizeFlexDemo } from './default-enabled-column-resize-flex-demo';
import * as i0 from "@angular/core";
var DefaultEnabledColumnResizeFlexDemoModule = /** @class */ (function () {
    function DefaultEnabledColumnResizeFlexDemoModule() {
    }
    DefaultEnabledColumnResizeFlexDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexDemoModule });
    DefaultEnabledColumnResizeFlexDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeFlexDemoModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexDemoModule)(); }, imports: [[
                MatDefaultEnabledColumnResizeModule,
                MatTableModule,
            ]] });
    return DefaultEnabledColumnResizeFlexDemoModule;
}());
export { DefaultEnabledColumnResizeFlexDemoModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexDemoModule, { declarations: [DefaultEnabledColumnResizeFlexDemo], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeFlexDemo] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexDemoModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeFlexDemo],
                exports: [DefaultEnabledColumnResizeFlexDemo],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1mbGV4L2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgtZGVtby1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFakcsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRTdGO0lBQUE7S0FTQztnRkFEWSx3Q0FBd0M7bUtBQXhDLHdDQUF3QyxrQkFQMUM7Z0JBQ1AsbUNBQW1DO2dCQUNuQyxjQUFjO2FBQ2Y7bURBbEJIO0NBdUJDLEFBVEQsSUFTQztTQURZLHdDQUF3Qzt3RkFBeEMsd0NBQXdDLG1CQUhwQyxrQ0FBa0MsYUFIL0MsbUNBQW1DO1FBQ25DLGNBQWMsYUFHTixrQ0FBa0M7a0RBRWpDLHdDQUF3QztjQVJwRCxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1DQUFtQztvQkFDbkMsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RGVtb30gZnJvbSAnLi9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1mbGV4LWRlbW8nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleERlbW9dLFxuICBleHBvcnRzOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RGVtb10sXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleERlbW9Nb2R1bGUge1xufVxuIl19