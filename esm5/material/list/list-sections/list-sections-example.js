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
    var folder_r2 = ctx.$implicit;
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
    var note_r3 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(note_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 2, note_r3.updated), " ");
} }
/**
 * @title List with sections
 */
var ListSectionsExample = /** @class */ (function () {
    function ListSectionsExample() {
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
    ListSectionsExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-sections-example',
                    styleUrls: ['list-sections-example.css'],
                    templateUrl: 'list-sections-example.html',
                },] },
    ];
    ListSectionsExample.ngFactoryDef = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
    ListSectionsExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
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
    return ListSectionsExample;
}());
export { ListSectionsExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ListSectionsExample, [{
        type: Component,
        args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDRXRDLHFDQUNFO0lBQUEsbUNBQXdCO0lBQUEsc0JBQU07SUFBQSxpQkFBVztJQUN6Qyw2QkFBYTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUNqQyw0QkFBYTtJQUFBLFlBQTBCOztJQUFBLGlCQUFJO0lBQzdDLGlCQUFnQjs7O0lBRkQsZUFBZTtJQUFmLG9DQUFlO0lBQ2YsZUFBMEI7SUFBMUIsd0VBQTBCOzs7SUFJekMscUNBQ0U7SUFBQSxtQ0FBd0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQ3ZDLDZCQUFhO0lBQUEsWUFBYTtJQUFBLGlCQUFLO0lBQy9CLDRCQUFhO0lBQUEsWUFBd0I7O0lBQUEsaUJBQUk7SUFDM0MsaUJBQWdCOzs7SUFGRCxlQUFhO0lBQWIsa0NBQWE7SUFDYixlQUF3QjtJQUF4QixzRUFBd0I7O0FETHpDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztLQUNIOztnQkE5QkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUN4QyxXQUFXLEVBQUUsNEJBQTRCO2lCQUMxQzs7a0dBQ1ksbUJBQW1CO3NFQUFuQixtQkFBbUI7WUNmaEMsZ0NBQ0U7WUFBQSw2QkFBa0I7WUFBQSx1QkFBTztZQUFBLGlCQUFLO1lBQzlCLHdGQUNFO1lBSUYsOEJBQTJCO1lBQzNCLDZCQUFrQjtZQUFBLHFCQUFLO1lBQUEsaUJBQUs7WUFDNUIsd0ZBQ0U7WUFJSixpQkFBVzs7WUFaTSxlQUE4QjtZQUE5QixxQ0FBOEI7WUFPOUIsZUFBMEI7WUFBMUIsbUNBQTBCOzs4QkRUM0M7Q0F3Q0MsQUE5QkQsSUE4QkM7U0F6QlksbUJBQW1CO21DQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxXQUFXLEVBQUUsNEJBQTRCO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWQ6IERhdGU7XG59XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlY3Rpb25zRXhhbXBsZSB7XG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUGhvdG9zJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE3LzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yaycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8yOC8xNicpLFxuICAgIH1cbiAgXTtcbiAgbm90ZXM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzIwLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2l0Y2hlbiBSZW1vZGVsJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE4LzE2JyksXG4gICAgfVxuICBdO1xufVxuIiwiPG1hdC1saXN0PlxuICA8aDMgbWF0LXN1YmhlYWRlcj5Gb2xkZXJzPC9oMz5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGZvbGRlciBvZiBmb2xkZXJzXCI+XG4gICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+Zm9sZGVyPC9tYXQtaWNvbj5cbiAgICA8aDQgbWF0LWxpbmU+e3tmb2xkZXIubmFtZX19PC9oND5cbiAgICA8cCBtYXQtbGluZT4ge3tmb2xkZXIudXBkYXRlZCB8IGRhdGV9fSA8L3A+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDxoMyBtYXQtc3ViaGVhZGVyPk5vdGVzPC9oMz5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG5vdGUgb2Ygbm90ZXNcIj5cbiAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICA8aDQgbWF0LWxpbmU+e3tub3RlLm5hbWV9fTwvaDQ+XG4gICAgPHAgbWF0LWxpbmU+IHt7bm90ZS51cGRhdGVkIHwgZGF0ZX19IDwvcD5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==