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
    ListSectionsExample.ɵfac = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
    ListSectionsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSectionsExample, [{
        type: Component,
        args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0V0QyxxQ0FDRTtJQUFBLG1DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVc7SUFDekMsNkJBQWE7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDakMsNEJBQWE7SUFBQSxZQUEwQjs7SUFBQSxpQkFBSTtJQUM3QyxpQkFBZ0I7OztJQUZELGVBQWU7SUFBZixvQ0FBZTtJQUNmLGVBQTBCO0lBQTFCLHdFQUEwQjs7O0lBSXpDLHFDQUNFO0lBQUEsbUNBQXdCO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUN2Qyw2QkFBYTtJQUFBLFlBQWE7SUFBQSxpQkFBSztJQUMvQiw0QkFBYTtJQUFBLFlBQXdCOztJQUFBLGlCQUFJO0lBQzNDLGlCQUFnQjs7O0lBRkQsZUFBYTtJQUFiLGtDQUFhO0lBQ2IsZUFBd0I7SUFBeEIsc0VBQXdCOztBREx6Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxZQUFPLEdBQWM7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztRQUNGLFVBQUssR0FBYztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7S0FDSDs7Z0JBOUJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDeEMsV0FBVyxFQUFFLDRCQUE0QjtpQkFDMUM7OzBGQUNZLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDZmhDLGdDQUNFO1lBQUEsNkJBQWtCO1lBQUEsdUJBQU87WUFBQSxpQkFBSztZQUM5Qix3RkFDRTtZQUlGLDhCQUEyQjtZQUMzQiw2QkFBa0I7WUFBQSxxQkFBSztZQUFBLGlCQUFLO1lBQzVCLHdGQUNFO1lBSUosaUJBQVc7O1lBWk0sZUFBOEI7WUFBOUIscUNBQThCO1lBTzlCLGVBQTBCO1lBQTFCLG1DQUEwQjs7OEJEVDNDO0NBd0NDLEFBOUJELElBOEJDO1NBekJZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkOiBEYXRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWN0aW9uc0V4YW1wbGUge1xuICBmb2xkZXJzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1Bob3RvcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmVjaXBlcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xNy8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvcmsnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMjgvMTYnKSxcbiAgICB9XG4gIF07XG4gIG5vdGVzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1ZhY2F0aW9uIEl0aW5lcmFyeScsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMi8yMC8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0tpdGNoZW4gUmVtb2RlbCcsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xOC8xNicpLFxuICAgIH1cbiAgXTtcbn1cbiIsIjxtYXQtbGlzdD5cbiAgPGgzIG1hdC1zdWJoZWFkZXI+Rm9sZGVyczwvaDM+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZm9sZGVyc1wiPlxuICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPmZvbGRlcjwvbWF0LWljb24+XG4gICAgPGg0IG1hdC1saW5lPnt7Zm9sZGVyLm5hbWV9fTwvaDQ+XG4gICAgPHAgbWF0LWxpbmU+IHt7Zm9sZGVyLnVwZGF0ZWQgfCBkYXRlfX0gPC9wPlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8aDMgbWF0LXN1YmhlYWRlcj5Ob3RlczwvaDM+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBub3RlIG9mIG5vdGVzXCI+XG4gICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+bm90ZTwvbWF0LWljb24+XG4gICAgPGg0IG1hdC1saW5lPnt7bm90ZS5uYW1lfX08L2g0PlxuICAgIDxwIG1hdC1saW5lPiB7e25vdGUudXBkYXRlZCB8IGRhdGV9fSA8L3A+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbjwvbWF0LWxpc3Q+XG4iXX0=