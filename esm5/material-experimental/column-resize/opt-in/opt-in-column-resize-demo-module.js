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
import { OptInColumnResizeDemo } from './opt-in-column-resize-demo';
import * as i0 from "@angular/core";
var OptInColumnResizeDemoModule = /** @class */ (function () {
    function OptInColumnResizeDemoModule() {
    }
    OptInColumnResizeDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatColumnResizeModule,
                        MatTableModule,
                    ],
                    declarations: [OptInColumnResizeDemo],
                    exports: [OptInColumnResizeDemo],
                },] },
    ];
    OptInColumnResizeDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: OptInColumnResizeDemoModule });
    OptInColumnResizeDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OptInColumnResizeDemoModule_Factory(t) { return new (t || OptInColumnResizeDemoModule)(); }, imports: [[
                MatColumnResizeModule,
                MatTableModule,
            ]] });
    return OptInColumnResizeDemoModule;
}());
export { OptInColumnResizeDemoModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OptInColumnResizeDemoModule, { declarations: [OptInColumnResizeDemo], imports: [MatColumnResizeModule,
        MatTableModule], exports: [OptInColumnResizeDemo] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptInColumnResizeDemoModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [OptInColumnResizeDemo],
                exports: [OptInColumnResizeDemo],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4vb3B0LWluLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFbkYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7O0FBRWxFO0lBQUE7S0FTQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNqQzs7bUVBQ1ksMkJBQTJCO3lJQUEzQiwyQkFBMkIsa0JBUDdCO2dCQUNQLHFCQUFxQjtnQkFDckIsY0FBYzthQUNmO3NDQWxCSDtDQXVCQyxBQVRELElBU0M7U0FEWSwyQkFBMkI7d0ZBQTNCLDJCQUEyQixtQkFIdkIscUJBQXFCLGFBSGxDLHFCQUFxQjtRQUNyQixjQUFjLGFBR04scUJBQXFCO2tEQUVwQiwyQkFBMkI7Y0FSdkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtPcHRJbkNvbHVtblJlc2l6ZURlbW99IGZyb20gJy4vb3B0LWluLWNvbHVtbi1yZXNpemUtZGVtbyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRDb2x1bW5SZXNpemVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09wdEluQ29sdW1uUmVzaXplRGVtb10sXG4gIGV4cG9ydHM6IFtPcHRJbkNvbHVtblJlc2l6ZURlbW9dLFxufSlcbmV4cG9ydCBjbGFzcyBPcHRJbkNvbHVtblJlc2l6ZURlbW9Nb2R1bGUge1xufVxuIl19