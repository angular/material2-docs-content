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
    var tab_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(tab_r2.label);
} }
function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab");
    i0.ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r2.content, " ");
} }
/**
 * @title Tab group with asynchronously loading tab contents
 */
var TabGroupAsyncExample = /** @class */ (function () {
    function TabGroupAsyncExample() {
        this.asyncTabs = new Observable(function (observer) {
            setTimeout(function () {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
    TabGroupAsyncExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-async-example',
                    templateUrl: 'tab-group-async-example.html',
                    styleUrls: ['tab-group-async-example.css'],
                },] },
    ];
    /** @nocollapse */
    TabGroupAsyncExample.ctorParameters = function () { return []; };
    TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
    TabGroupAsyncExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
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
}());
export { TabGroupAsyncExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAsyncExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hc3luYy90YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDOzs7OztJQ0QxQyw2QkFDRTtJQUFBLGtDQUNGO0lBQUEsMEJBQWU7OztJQUlnQixZQUFhOzs7SUFBYixrQ0FBYTs7O0lBRDFDLCtCQUNFO0lBQUEsK0ZBQTJCO0lBQzNCLFlBQ0Y7SUFBQSxpQkFBVTs7O0lBRFIsZUFDRjtJQURFLCtDQUNGOztBREFGOztHQUVHO0FBQ0g7SUFRRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBQyxRQUFnQztZQUMvRCxVQUFVLENBQUM7Z0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztvQkFDdEMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7b0JBQ3ZDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO2lCQUN2QyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzNDOzs7OzRGQUNZLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDaEJqQyx1RkFDRTs7WUFHRixxQ0FDRTtZQUFBLDZFQUNFOztZQUdKLGlCQUFnQjs7WUFURixtRUFBb0M7WUFLdkMsZUFBcUM7WUFBckMsNkRBQXFDOzsrQkRMaEQ7Q0E4QkMsQUFuQkQsSUFtQkM7U0FkWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFeGFtcGxlVGFiIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBhc3luY2hyb25vdXNseSBsb2FkaW5nIHRhYiBjb250ZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBc3luY0V4YW1wbGUge1xuICBhc3luY1RhYnM6IE9ic2VydmFibGU8RXhhbXBsZVRhYltdPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFzeW5jVGFicyA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXhhbXBsZVRhYltdPikgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoW1xuICAgICAgICAgIHtsYWJlbDogJ0ZpcnN0JywgY29udGVudDogJ0NvbnRlbnQgMSd9LFxuICAgICAgICAgIHtsYWJlbDogJ1NlY29uZCcsIGNvbnRlbnQ6ICdDb250ZW50IDInfSxcbiAgICAgICAgICB7bGFiZWw6ICdUaGlyZCcsIGNvbnRlbnQ6ICdDb250ZW50IDMnfSxcbiAgICAgICAgXSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIihhc3luY1RhYnMgfCBhc3luYykgPT09IG51bGxcIj5cbiAgTG9hZGluZyB0YWJzLi4uXG48L25nLWNvbnRhaW5lcj5cblxuPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiICpuZ0Zvcj1cImxldCB0YWIgb2YgYXN5bmNUYWJzIHwgYXN5bmNcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD57e3RhYi5sYWJlbH19PC9uZy10ZW1wbGF0ZT5cbiAgICB7e3RhYi5jb250ZW50fX1cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19