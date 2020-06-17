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
let DefaultEnabledColumnResizeExampleModule = /** @class */ (() => {
    class DefaultEnabledColumnResizeExampleModule {
    }
    DefaultEnabledColumnResizeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeExampleModule });
    DefaultEnabledColumnResizeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeExampleModule)(); }, imports: [[
                MatDefaultEnabledColumnResizeModule,
                MatTableModule,
            ]] });
    return DefaultEnabledColumnResizeExampleModule;
})();
export { DefaultEnabledColumnResizeExampleModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeExampleModule, { declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeExample],
                exports: [DefaultEnabledColumnResizeExample],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFakcsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTFGO0lBQUEsTUFRYSx1Q0FBdUM7OytFQUF2Qyx1Q0FBdUM7aUtBQXZDLHVDQUF1QyxrQkFQekM7Z0JBQ1AsbUNBQW1DO2dCQUNuQyxjQUFjO2FBQ2Y7a0RBbEJIO0tBdUJDO1NBRFksdUNBQXVDO3dGQUF2Qyx1Q0FBdUMsbUJBSG5DLGlDQUFpQyxhQUg5QyxtQ0FBbUM7UUFDbkMsY0FBYyxhQUdOLGlDQUFpQztrREFFaEMsdUNBQXVDO2NBUm5ELFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsbUNBQW1DO29CQUNuQyxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGV9IGZyb20gJy4vZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVFeGFtcGxlXSxcbiAgZXhwb3J0czogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZU1vZHVsZSB7XG59XG4iXX0=