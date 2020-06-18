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
let DefaultEnabledColumnResizeFlexExampleModule = /** @class */ (() => {
    class DefaultEnabledColumnResizeFlexExampleModule {
    }
    DefaultEnabledColumnResizeFlexExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexExampleModule });
    DefaultEnabledColumnResizeFlexExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeFlexExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExampleModule)(); }, imports: [[
                MatDefaultEnabledColumnResizeModule,
                MatTableModule,
            ]] });
    return DefaultEnabledColumnResizeFlexExampleModule;
})();
export { DefaultEnabledColumnResizeFlexExampleModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexExampleModule, { declarations: [DefaultEnabledColumnResizeFlexExample], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeFlexExample],
                exports: [DefaultEnabledColumnResizeFlexExample],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1mbGV4L2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgtZXhhbXBsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFakcsT0FBTyxFQUFDLHFDQUFxQyxFQUFDLE1BQU0sOENBQThDLENBQUM7O0FBRW5HO0lBQUEsTUFRYSwyQ0FBMkM7O21GQUEzQywyQ0FBMkM7eUtBQTNDLDJDQUEyQyxrQkFQN0M7Z0JBQ1AsbUNBQW1DO2dCQUNuQyxjQUFjO2FBQ2Y7c0RBbEJIO0tBdUJDO1NBRFksMkNBQTJDO3dGQUEzQywyQ0FBMkMsbUJBSHZDLHFDQUFxQyxhQUhsRCxtQ0FBbUM7UUFDbkMsY0FBYyxhQUdOLHFDQUFxQztrREFFcEMsMkNBQTJDO2NBUnZELFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsbUNBQW1DO29CQUNuQyxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUNyRCxPQUFPLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhFeGFtcGxlfSBmcm9tICcuL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgtZXhhbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZV0sXG4gIGV4cG9ydHM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhFeGFtcGxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVGbGV4RXhhbXBsZU1vZHVsZSB7XG59XG4iXX0=