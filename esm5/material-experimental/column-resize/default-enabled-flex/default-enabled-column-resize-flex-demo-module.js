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
    DefaultEnabledColumnResizeFlexDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatDefaultEnabledColumnResizeModule,
                        MatTableModule,
                    ],
                    declarations: [DefaultEnabledColumnResizeFlexDemo],
                    exports: [DefaultEnabledColumnResizeFlexDemo],
                },] },
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1mbGV4L2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgtZGVtby1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFakcsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRTdGO0lBQUE7S0FTQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQ0FBbUM7d0JBQ25DLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2lCQUM5Qzs7Z0ZBQ1ksd0NBQXdDO21LQUF4Qyx3Q0FBd0Msa0JBUDFDO2dCQUNQLG1DQUFtQztnQkFDbkMsY0FBYzthQUNmO21EQWxCSDtDQXVCQyxBQVRELElBU0M7U0FEWSx3Q0FBd0M7d0ZBQXhDLHdDQUF3QyxtQkFIcEMsa0NBQWtDLGFBSC9DLG1DQUFtQztRQUNuQyxjQUFjLGFBR04sa0NBQWtDO2tEQUVqQyx3Q0FBd0M7Y0FScEQsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxtQ0FBbUM7b0JBQ25DLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleERlbW99IGZyb20gJy4vZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhEZW1vXSxcbiAgZXhwb3J0czogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleERlbW9dLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhEZW1vTW9kdWxlIHtcbn1cbiJdfQ==