/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatColumnResizeModule } from '@angular/material-experimental/column-resize';
import { OptInColumnResizeExample } from './opt-in-column-resize-example';
import * as i0 from "@angular/core";
let OptInColumnResizeExampleModule = /** @class */ (() => {
    class OptInColumnResizeExampleModule {
    }
    OptInColumnResizeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: OptInColumnResizeExampleModule });
    OptInColumnResizeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OptInColumnResizeExampleModule_Factory(t) { return new (t || OptInColumnResizeExampleModule)(); }, imports: [[
                MatColumnResizeModule,
                MatTableModule,
            ]] });
    return OptInColumnResizeExampleModule;
})();
export { OptInColumnResizeExampleModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OptInColumnResizeExampleModule, { declarations: [OptInColumnResizeExample], imports: [MatColumnResizeModule,
        MatTableModule], exports: [OptInColumnResizeExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptInColumnResizeExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [OptInColumnResizeExample],
                exports: [OptInColumnResizeExample],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4vb3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFbkYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7O0FBRXhFO0lBQUEsTUFRYSw4QkFBOEI7O3NFQUE5Qiw4QkFBOEI7K0lBQTlCLDhCQUE4QixrQkFQaEM7Z0JBQ1AscUJBQXFCO2dCQUNyQixjQUFjO2FBQ2Y7eUNBbEJIO0tBdUJDO1NBRFksOEJBQThCO3dGQUE5Qiw4QkFBOEIsbUJBSDFCLHdCQUF3QixhQUhyQyxxQkFBcUI7UUFDckIsY0FBYyxhQUdOLHdCQUF3QjtrREFFdkIsOEJBQThCO2NBUjFDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0Q29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7T3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlfSBmcm9tICcuL29wdC1pbi1jb2x1bW4tcmVzaXplLWV4YW1wbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Q29sdW1uUmVzaXplTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGVdLFxuICBleHBvcnRzOiBbT3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlXSxcbn0pXG5leHBvcnQgY2xhc3MgT3B0SW5Db2x1bW5SZXNpemVFeGFtcGxlTW9kdWxlIHtcbn1cbiJdfQ==