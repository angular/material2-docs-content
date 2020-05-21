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
 * @title List with sections
 */
let ListSectionsExample = /** @class */ (() => {
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
    ListSectionsExample.ɵfac = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
    ListSectionsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0V0QyxxQ0FDRTtJQUFBLG1DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVc7SUFDekMsOEJBQWM7SUFBQSxZQUFlO0lBQUEsaUJBQU07SUFDbkMsOEJBQWU7SUFBQSxZQUEwQjs7SUFBQSxpQkFBTTtJQUNqRCxpQkFBZ0I7OztJQUZBLGVBQWU7SUFBZixvQ0FBZTtJQUNkLGVBQTBCO0lBQTFCLHdFQUEwQjs7O0lBSTNDLHFDQUNFO0lBQUEsbUNBQXdCO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUN2Qyw4QkFBYztJQUFBLFlBQWE7SUFBQSxpQkFBTTtJQUNqQyw4QkFBZTtJQUFBLFlBQXdCOztJQUFBLGlCQUFNO0lBQy9DLGlCQUFnQjs7O0lBRkEsZUFBYTtJQUFiLGtDQUFhO0lBQ1osZUFBd0I7SUFBeEIsc0VBQXdCOztBREwzQzs7R0FFRztBQUNIO0lBQUEsTUFLYSxtQkFBbUI7UUFMaEM7WUFNRSxZQUFPLEdBQWM7Z0JBQ25CO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQzVCO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQzdCO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQzdCO2FBQ0YsQ0FBQztZQUNGLFVBQUssR0FBYztnQkFDakI7b0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtvQkFDMUIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDN0I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDN0I7YUFDRixDQUFDO1NBQ0g7OzBGQXpCWSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQ2ZoQyxnQ0FDRTtZQUFBLDhCQUFtQjtZQUFBLHVCQUFPO1lBQUEsaUJBQU07WUFDaEMsd0ZBQ0U7WUFJRiw4QkFBMkI7WUFDM0IsOEJBQW1CO1lBQUEscUJBQUs7WUFBQSxpQkFBTTtZQUM5Qix3RkFDRTtZQUlKLGlCQUFXOztZQVpNLGVBQThCO1lBQTlCLHFDQUE4QjtZQU85QixlQUEwQjtZQUExQixtQ0FBMEI7OzhCRFQzQztLQXdDQztTQXpCWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXBkYXRlZDogRGF0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlY3Rpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VjdGlvbnNFeGFtcGxlIHtcbiAgZm9sZGVyczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQaG90b3MnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMS8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JlY2lwZXMnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTcvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb3JrJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzI4LzE2JyksXG4gICAgfVxuICBdO1xuICBub3RlczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdWYWNhdGlvbiBJdGluZXJhcnknLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMjAvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLaXRjaGVuIFJlbW9kZWwnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTgvMTYnKSxcbiAgICB9XG4gIF07XG59XG4iLCI8bWF0LWxpc3Q+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Gb2xkZXJzPC9kaXY+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZm9sZGVyc1wiPlxuICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPmZvbGRlcjwvbWF0LWljb24+XG4gICAgPGRpdiBtYXQtbGluZT57e2ZvbGRlci5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdC1saW5lPiB7e2ZvbGRlci51cGRhdGVkIHwgZGF0ZX19IDwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Tm90ZXM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG5vdGUgb2Ygbm90ZXNcIj5cbiAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICA8ZGl2IG1hdC1saW5lPnt7bm90ZS5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdC1saW5lPiB7e25vdGUudXBkYXRlZCB8IGRhdGV9fSA8L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==