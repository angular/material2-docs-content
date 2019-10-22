/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    i0.ɵɵelementStart(3, "h4", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 3);
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
    i0.ɵɵelementStart(3, "h4", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 3);
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
/** @nocollapse */ ListSectionsExample.ngFactoryDef = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
/** @nocollapse */ ListSectionsExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list");
        i0.ɵɵelementStart(1, "h3", 0);
        i0.ɵɵtext(2, "Folders");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ListSectionsExample_mat_list_item_3_Template, 8, 4, "mat-list-item", 1);
        i0.ɵɵelement(4, "mat-divider");
        i0.ɵɵelementStart(5, "h3", 0);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(ListSectionsExample, [{
        type: Component,
        args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ListSectionsExample.prototype.folders;
    /** @type {?} */
    ListSectionsExample.prototype.notes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0V0QyxxQ0FDRTtJQUFBLG1DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVc7SUFDekMsNkJBQWE7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDakMsNEJBQWE7SUFBQSxZQUEwQjs7SUFBQSxpQkFBSTtJQUM3QyxpQkFBZ0I7OztJQUZELGVBQWU7SUFBZixvQ0FBZTtJQUNmLGVBQTBCO0lBQTFCLHdFQUEwQjs7O0lBSXpDLHFDQUNFO0lBQUEsbUNBQXdCO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUN2Qyw2QkFBYTtJQUFBLFlBQWE7SUFBQSxpQkFBSztJQUMvQiw0QkFBYTtJQUFBLFlBQXdCOztJQUFBLGlCQUFJO0lBQzNDLGlCQUFnQjs7O0lBRkQsZUFBYTtJQUFiLGtDQUFhO0lBQ2IsZUFBd0I7SUFBeEIsc0VBQXdCOzs7OztBRFZ6Qyw2QkFHQzs7O0lBRkMsdUJBQWE7O0lBQ2IsMEJBQWM7Ozs7O0FBV2hCLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNRSxZQUFPLEdBQWM7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztRQUNGLFVBQUssR0FBYztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7S0FDSDs7O1lBOUJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQzs7OEZBQ1ksbUJBQW1CO2tFQUFuQixtQkFBbUI7UUNmaEMsZ0NBQ0U7UUFBQSw2QkFBa0I7UUFBQSx1QkFBTztRQUFBLGlCQUFLO1FBQzlCLHdGQUNFO1FBSUYsOEJBQTJCO1FBQzNCLDZCQUFrQjtRQUFBLHFCQUFLO1FBQUEsaUJBQUs7UUFDNUIsd0ZBQ0U7UUFJSixpQkFBVzs7UUFaTSxlQUE4QjtRQUE5QixxQ0FBOEI7UUFPOUIsZUFBMEI7UUFBMUIsbUNBQTBCOzttQ0RNOUIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQzs7OztJQUVDLHNDQWFFOztJQUNGLG9DQVNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWQ6IERhdGU7XG59XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlY3Rpb25zRXhhbXBsZSB7XG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUGhvdG9zJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE3LzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yaycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8yOC8xNicpLFxuICAgIH1cbiAgXTtcbiAgbm90ZXM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzIwLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2l0Y2hlbiBSZW1vZGVsJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE4LzE2JyksXG4gICAgfVxuICBdO1xufVxuIiwiPG1hdC1saXN0PlxuICA8aDMgbWF0LXN1YmhlYWRlcj5Gb2xkZXJzPC9oMz5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGZvbGRlciBvZiBmb2xkZXJzXCI+XG4gICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+Zm9sZGVyPC9tYXQtaWNvbj5cbiAgICA8aDQgbWF0LWxpbmU+e3tmb2xkZXIubmFtZX19PC9oND5cbiAgICA8cCBtYXQtbGluZT4ge3tmb2xkZXIudXBkYXRlZCB8IGRhdGV9fSA8L3A+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDxoMyBtYXQtc3ViaGVhZGVyPk5vdGVzPC9oMz5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG5vdGUgb2Ygbm90ZXNcIj5cbiAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICA8aDQgbWF0LWxpbmU+e3tub3RlLm5hbWV9fTwvaDQ+XG4gICAgPHAgbWF0LWxpbmU+IHt7bm90ZS51cGRhdGVkIHwgZGF0ZX19IDwvcD5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==