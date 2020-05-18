/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/list/list-sections/list-sections-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/divider";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/core";
function ListSectionsExample_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 2);
    i0.ɵɵtext(2, "folder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 3);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const folder_r2 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(folder_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 2, folder_r2.updated), " ");
} }
function ListSectionsExample_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 2);
    i0.ɵɵtext(2, "note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 3);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(note_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 2, note_r3.updated), " ");
} }
/**
 * @record
 */
export function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.name;
    /** @type {?} */
    Section.prototype.updated;
}
/**
 * \@title List with sections
 */
let ListSectionsExample = /** @class */ (() => {
    /**
     * \@title List with sections
     */
    class ListSectionsExample {
        constructor() {
            this.folders = [
                {
                    name: 'Photos',
                    updated: new Date('1/1/16'),
                },
                {
                    name: 'Recipes',
                    updated: new Date('1/17/16'),
                },
                {
                    name: 'Work',
                    updated: new Date('1/28/16'),
                }
            ];
            this.notes = [
                {
                    name: 'Vacation Itinerary',
                    updated: new Date('2/20/16'),
                },
                {
                    name: 'Kitchen Remodel',
                    updated: new Date('1/18/16'),
                }
            ];
        }
    }
    ListSectionsExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-sections-example',
                    styleUrls: ['list-sections-example.css'],
                    templateUrl: 'list-sections-example.html',
                },] },
    ];
    /** @nocollapse */ ListSectionsExample.ɵfac = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
    /** @nocollapse */ ListSectionsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtext(2, "Folders");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ListSectionsExample_mat_list_item_3_Template, 8, 4, "mat-list-item", 1);
            i0.ɵɵelement(4, "mat-divider");
            i0.ɵɵelementStart(5, "div", 0);
            i0.ɵɵtext(6, "Notes");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, ListSectionsExample_mat_list_item_7_Template, 8, 4, "mat-list-item", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.folders);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.notes);
        } }, directives: [i1.MatList, i1.MatListSubheaderCssMatStyler, i2.NgForOf, i3.MatDivider, i1.MatListItem, i4.MatIcon, i1.MatListIconCssMatStyler, i5.MatLine], pipes: [i2.DatePipe], styles: [".mat-list-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}"] });
    return ListSectionsExample;
})();
export { ListSectionsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSectionsExample, [{
        type: Component,
        args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ListSectionsExample.prototype.folders;
    /** @type {?} */
    ListSectionsExample.prototype.notes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDRXRDLHFDQUNFO0lBQUEsbUNBQXdCO0lBQUEsc0JBQU07SUFBQSxpQkFBVztJQUN6Qyw4QkFBYztJQUFBLFlBQWU7SUFBQSxpQkFBTTtJQUNuQyw4QkFBZTtJQUFBLFlBQTBCOztJQUFBLGlCQUFNO0lBQ2pELGlCQUFnQjs7O0lBRkEsZUFBZTtJQUFmLG9DQUFlO0lBQ2QsZUFBMEI7SUFBMUIsd0VBQTBCOzs7SUFJM0MscUNBQ0U7SUFBQSxtQ0FBd0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQ3ZDLDhCQUFjO0lBQUEsWUFBYTtJQUFBLGlCQUFNO0lBQ2pDLDhCQUFlO0lBQUEsWUFBd0I7O0lBQUEsaUJBQU07SUFDL0MsaUJBQWdCOzs7SUFGQSxlQUFhO0lBQWIsa0NBQWE7SUFDWixlQUF3QjtJQUF4QixzRUFBd0I7Ozs7O0FEVjNDLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYzs7Ozs7QUFNaEI7Ozs7SUFBQSxNQUthLG1CQUFtQjtRQUxoQztZQU1FLFlBQU8sR0FBYztnQkFDbkI7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDNUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDN0I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDN0I7YUFDRixDQUFDO1lBQ0YsVUFBSyxHQUFjO2dCQUNqQjtvQkFDRSxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUM3QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUM3QjthQUNGLENBQUM7U0FDSDs7O2dCQTlCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7aUJBQzFDOzs2R0FDWSxtQkFBbUI7K0VBQW5CLG1CQUFtQjtZQ2ZoQyxnQ0FDRTtZQUFBLDhCQUFtQjtZQUFBLHVCQUFPO1lBQUEsaUJBQU07WUFDaEMsd0ZBQ0U7WUFJRiw4QkFBMkI7WUFDM0IsOEJBQW1CO1lBQUEscUJBQUs7WUFBQSxpQkFBTTtZQUM5Qix3RkFDRTtZQUlKLGlCQUFXOztZQVpNLGVBQThCO1lBQTlCLHFDQUE4QjtZQU85QixlQUEwQjtZQUExQixtQ0FBMEI7OzhCRFQzQztLQXdDQztTQXpCWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7Ozs7SUFFQyxzQ0FhRTs7SUFDRixvQ0FTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkOiBEYXRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWN0aW9uc0V4YW1wbGUge1xuICBmb2xkZXJzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1Bob3RvcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmVjaXBlcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xNy8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvcmsnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMjgvMTYnKSxcbiAgICB9XG4gIF07XG4gIG5vdGVzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1ZhY2F0aW9uIEl0aW5lcmFyeScsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMi8yMC8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0tpdGNoZW4gUmVtb2RlbCcsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xOC8xNicpLFxuICAgIH1cbiAgXTtcbn1cbiIsIjxtYXQtbGlzdD5cbiAgPGRpdiBtYXQtc3ViaGVhZGVyPkZvbGRlcnM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGZvbGRlciBvZiBmb2xkZXJzXCI+XG4gICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+Zm9sZGVyPC9tYXQtaWNvbj5cbiAgICA8ZGl2IG1hdC1saW5lPnt7Zm9sZGVyLm5hbWV9fTwvZGl2PlxuICAgIDxkaXYgbWF0LWxpbmU+IHt7Zm9sZGVyLnVwZGF0ZWQgfCBkYXRlfX0gPC9kaXY+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Ob3RlczwvZGl2PlxuICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbm90ZSBvZiBub3Rlc1wiPlxuICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPm5vdGU8L21hdC1pY29uPlxuICAgIDxkaXYgbWF0LWxpbmU+e3tub3RlLm5hbWV9fTwvZGl2PlxuICAgIDxkaXYgbWF0LWxpbmU+IHt7bm90ZS51cGRhdGVkIHwgZGF0ZX19IDwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG48L21hdC1saXN0PlxuIl19