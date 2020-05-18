/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tabs/tab-group-async/tab-group-async-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tabs";
function TabGroupAsyncExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Loading tabs...\n");
    i0.ɵɵelementContainerEnd();
} }
function TabGroupAsyncExample_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const tab_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(tab_r2.label);
} }
function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab");
    i0.ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r2.content, " ");
} }
/**
 * @record
 */
export function ExampleTab() { }
if (false) {
    /** @type {?} */
    ExampleTab.prototype.label;
    /** @type {?} */
    ExampleTab.prototype.content;
}
/**
 * \@title Tab group with asynchronously loading tab contents
 */
let TabGroupAsyncExample = /** @class */ (() => {
    /**
     * \@title Tab group with asynchronously loading tab contents
     */
    class TabGroupAsyncExample {
        constructor() {
            this.asyncTabs = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    observer.next([
                        { label: 'First', content: 'Content 1' },
                        { label: 'Second', content: 'Content 2' },
                        { label: 'Third', content: 'Content 3' },
                    ]);
                }), 1000);
            }));
        }
    }
    TabGroupAsyncExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-async-example',
                    templateUrl: 'tab-group-async-example.html',
                    styleUrls: ['tab-group-async-example.css'],
                },] },
    ];
    /** @nocollapse */
    TabGroupAsyncExample.ctorParameters = () => [];
    /** @nocollapse */ TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
    /** @nocollapse */ TabGroupAsyncExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TabGroupAsyncExample_ng_container_0_Template, 2, 0, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementStart(2, "mat-tab-group");
            i0.ɵɵtemplate(3, TabGroupAsyncExample_mat_tab_3_Template, 3, 1, "mat-tab", 1);
            i0.ɵɵpipe(4, "async");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.asyncTabs) === null);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 4, ctx.asyncTabs));
        } }, directives: [i1.NgIf, i2.MatTabGroup, i1.NgForOf, i2.MatTab, i2.MatTabLabel], pipes: [i1.AsyncPipe], styles: [""] });
    return TabGroupAsyncExample;
})();
export { TabGroupAsyncExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAsyncExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    TabGroupAsyncExample.prototype.asyncTabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hc3luYy90YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7Ozs7O0lDRDFDLDZCQUNFO0lBQUEsa0NBQ0Y7SUFBQSwwQkFBZTs7O0lBSWdCLFlBQWE7OztJQUFiLGtDQUFhOzs7SUFEMUMsK0JBQ0U7SUFBQSwrRkFBMkI7SUFDM0IsWUFDRjtJQUFBLGlCQUFVOzs7SUFEUixlQUNGO0lBREUsK0NBQ0Y7Ozs7O0FETEYsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLDZCQUFnQjs7Ozs7QUFNbEI7Ozs7SUFBQSxNQUthLG9CQUFvQjtRQUcvQjtZQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVOzs7O1lBQUMsQ0FBQyxRQUFnQyxFQUFFLEVBQUU7Z0JBQ25FLFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQzt3QkFDdEMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7d0JBQ3ZDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO3FCQUN2QyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDOzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7Ozs7K0dBQ1ksb0JBQW9CO2dGQUFwQixvQkFBb0I7WUNoQmpDLHVGQUNFOztZQUdGLHFDQUNFO1lBQUEsNkVBQ0U7O1lBR0osaUJBQWdCOztZQVRGLG1FQUFvQztZQUt2QyxlQUFxQztZQUFyQyw2REFBcUM7OytCRExoRDtLQThCQztTQWRZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVDLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4YW1wbGVUYWIge1xuICBsYWJlbDogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGFzeW5jaHJvbm91c2x5IGxvYWRpbmcgdGFiIGNvbnRlbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEFzeW5jRXhhbXBsZSB7XG4gIGFzeW5jVGFiczogT2JzZXJ2YWJsZTxFeGFtcGxlVGFiW10+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXN5bmNUYWJzID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFeGFtcGxlVGFiW10+KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChbXG4gICAgICAgICAge2xhYmVsOiAnRmlyc3QnLCBjb250ZW50OiAnQ29udGVudCAxJ30sXG4gICAgICAgICAge2xhYmVsOiAnU2Vjb25kJywgY29udGVudDogJ0NvbnRlbnQgMid9LFxuICAgICAgICAgIHtsYWJlbDogJ1RoaXJkJywgY29udGVudDogJ0NvbnRlbnQgMyd9LFxuICAgICAgICBdKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiKGFzeW5jVGFicyB8IGFzeW5jKSA9PT0gbnVsbFwiPlxuICBMb2FkaW5nIHRhYnMuLi5cbjwvbmctY29udGFpbmVyPlxuXG48bWF0LXRhYi1ncm91cD5cbiAgPG1hdC10YWIgKm5nRm9yPVwibGV0IHRhYiBvZiBhc3luY1RhYnMgfCBhc3luY1wiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPnt7dGFiLmxhYmVsfX08L25nLXRlbXBsYXRlPlxuICAgIHt7dGFiLmNvbnRlbnR9fVxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=