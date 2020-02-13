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
import { DefaultEnabledColumnResizeDemo } from './default-enabled-column-resize-demo';
import * as i0 from "@angular/core";
var DefaultEnabledColumnResizeDemoModule = /** @class */ (function () {
    function DefaultEnabledColumnResizeDemoModule() {
    }
    DefaultEnabledColumnResizeDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatDefaultEnabledColumnResizeModule,
                        MatTableModule,
                    ],
                    declarations: [DefaultEnabledColumnResizeDemo],
                    exports: [DefaultEnabledColumnResizeDemo],
                },] },
    ];
    DefaultEnabledColumnResizeDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeDemoModule });
    DefaultEnabledColumnResizeDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeDemoModule_Factory(t) { return new (t || DefaultEnabledColumnResizeDemoModule)(); }, imports: [[
                MatDefaultEnabledColumnResizeModule,
                MatTableModule,
            ]] });
    return DefaultEnabledColumnResizeDemoModule;
}());
export { DefaultEnabledColumnResizeDemoModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeDemoModule, { declarations: [DefaultEnabledColumnResizeDemo], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeDemo] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeDemoModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeDemo],
                exports: [DefaultEnabledColumnResizeDemo],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFakcsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7O0FBRXBGO0lBQUE7S0FTQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQ0FBbUM7d0JBQ25DLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzlDLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUMxQzs7NEVBQ1ksb0NBQW9DOzJKQUFwQyxvQ0FBb0Msa0JBUHRDO2dCQUNQLG1DQUFtQztnQkFDbkMsY0FBYzthQUNmOytDQWxCSDtDQXVCQyxBQVRELElBU0M7U0FEWSxvQ0FBb0M7d0ZBQXBDLG9DQUFvQyxtQkFIaEMsOEJBQThCLGFBSDNDLG1DQUFtQztRQUNuQyxjQUFjLGFBR04sOEJBQThCO2tEQUU3QixvQ0FBb0M7Y0FSaEQsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxtQ0FBbUM7b0JBQ25DLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzlDLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRGVtb30gZnJvbSAnLi9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1kZW1vJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZURlbW9dLFxuICBleHBvcnRzOiBbRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVEZW1vXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVEZW1vTW9kdWxlIHtcbn1cbiJdfQ==