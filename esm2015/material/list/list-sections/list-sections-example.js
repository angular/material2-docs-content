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
export class ListSectionsExample {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDRXRDLHFDQUNFO0lBQUEsbUNBQXdCO0lBQUEsc0JBQU07SUFBQSxpQkFBVztJQUN6Qyw4QkFBYztJQUFBLFlBQWU7SUFBQSxpQkFBTTtJQUNuQyw4QkFBZTtJQUFBLFlBQTBCOztJQUFBLGlCQUFNO0lBQ2pELGlCQUFnQjs7O0lBRkEsZUFBZTtJQUFmLG9DQUFlO0lBQ2QsZUFBMEI7SUFBMUIsd0VBQTBCOzs7SUFJM0MscUNBQ0U7SUFBQSxtQ0FBd0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQ3ZDLDhCQUFjO0lBQUEsWUFBYTtJQUFBLGlCQUFNO0lBQ2pDLDhCQUFlO0lBQUEsWUFBd0I7O0lBQUEsaUJBQU07SUFDL0MsaUJBQWdCOzs7SUFGQSxlQUFhO0lBQWIsa0NBQWE7SUFDWixlQUF3QjtJQUF4QixzRUFBd0I7Ozs7O0FEVjNDLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYzs7Ozs7QUFXaEIsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztLQUNIOzs7WUE5QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxXQUFXLEVBQUUsNEJBQTRCO2FBQzFDOzt5R0FDWSxtQkFBbUI7MkVBQW5CLG1CQUFtQjtRQ2ZoQyxnQ0FDRTtRQUFBLDhCQUFtQjtRQUFBLHVCQUFPO1FBQUEsaUJBQU07UUFDaEMsd0ZBQ0U7UUFJRiw4QkFBMkI7UUFDM0IsOEJBQW1CO1FBQUEscUJBQUs7UUFBQSxpQkFBTTtRQUM5Qix3RkFDRTtRQUlKLGlCQUFXOztRQVpNLGVBQThCO1FBQTlCLHFDQUE4QjtRQU85QixlQUEwQjtRQUExQixtQ0FBMEI7O2tERE05QixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxXQUFXLEVBQUUsNEJBQTRCO2FBQzFDOzs7O0lBRUMsc0NBYUU7O0lBQ0Ysb0NBU0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXBkYXRlZDogRGF0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlY3Rpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VjdGlvbnNFeGFtcGxlIHtcbiAgZm9sZGVyczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQaG90b3MnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMS8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JlY2lwZXMnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTcvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb3JrJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzI4LzE2JyksXG4gICAgfVxuICBdO1xuICBub3RlczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdWYWNhdGlvbiBJdGluZXJhcnknLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMjAvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLaXRjaGVuIFJlbW9kZWwnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTgvMTYnKSxcbiAgICB9XG4gIF07XG59XG4iLCI8bWF0LWxpc3Q+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Gb2xkZXJzPC9kaXY+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZm9sZGVyc1wiPlxuICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPmZvbGRlcjwvbWF0LWljb24+XG4gICAgPGRpdiBtYXQtbGluZT57e2ZvbGRlci5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdC1saW5lPiB7e2ZvbGRlci51cGRhdGVkIHwgZGF0ZX19IDwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Tm90ZXM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG5vdGUgb2Ygbm90ZXNcIj5cbiAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICA8ZGl2IG1hdC1saW5lPnt7bm90ZS5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdC1saW5lPiB7e25vdGUudXBkYXRlZCB8IGRhdGV9fSA8L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==