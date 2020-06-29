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
export class OptInColumnResizeExampleModule {
}
OptInColumnResizeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: OptInColumnResizeExampleModule });
OptInColumnResizeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OptInColumnResizeExampleModule_Factory(t) { return new (t || OptInColumnResizeExampleModule)(); }, imports: [[
            MatColumnResizeModule,
            MatTableModule,
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4vb3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFbkYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7O0FBVXhFLE1BQU0sT0FBTyw4QkFBOEI7O2tFQUE5Qiw4QkFBOEI7MklBQTlCLDhCQUE4QixrQkFQaEM7WUFDUCxxQkFBcUI7WUFDckIsY0FBYztTQUNmO3dGQUlVLDhCQUE4QixtQkFIMUIsd0JBQXdCLGFBSHJDLHFCQUFxQjtRQUNyQixjQUFjLGFBR04sd0JBQXdCO2tEQUV2Qiw4QkFBOEI7Y0FSMUMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRDb2x1bW5SZXNpemVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplJztcblxuaW1wb3J0IHtPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGV9IGZyb20gJy4vb3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRDb2x1bW5SZXNpemVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09wdEluQ29sdW1uUmVzaXplRXhhbXBsZV0sXG4gIGV4cG9ydHM6IFtPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGVdLFxufSlcbmV4cG9ydCBjbGFzcyBPcHRJbkNvbHVtblJlc2l6ZUV4YW1wbGVNb2R1bGUge1xufVxuIl19