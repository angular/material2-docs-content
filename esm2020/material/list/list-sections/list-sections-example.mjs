import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/legacy-list";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/divider";
/**
 * @title List with sections
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
            },
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            },
        ];
    }
}
ListSectionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSectionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ListSectionsExample, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatLegacyList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { kind: "component", type: i3.MatLegacyListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { kind: "directive", type: i4.MatLine, selector: "[mat-line], [matLine]" }, { kind: "directive", type: i3.MatLegacyListIconCssMatStyler, selector: "[mat-list-icon], [matListIcon]" }, { kind: "directive", type: i3.MatLegacyListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i5.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBT3hDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztLQUNIOztnSEF6QlksbUJBQW1CO29HQUFuQixtQkFBbUIsNkRDZmhDLGdpQkFlQTsyRkRBYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWQ6IERhdGU7XG59XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlY3Rpb25zRXhhbXBsZSB7XG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUGhvdG9zJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE3LzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yaycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8yOC8xNicpLFxuICAgIH0sXG4gIF07XG4gIG5vdGVzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1ZhY2F0aW9uIEl0aW5lcmFyeScsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMi8yMC8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0tpdGNoZW4gUmVtb2RlbCcsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xOC8xNicpLFxuICAgIH0sXG4gIF07XG59XG4iLCI8bWF0LWxpc3Q+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Gb2xkZXJzPC9kaXY+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZm9sZGVyc1wiPlxuICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPmZvbGRlcjwvbWF0LWljb24+XG4gICAgPGRpdiBtYXQtbGluZT57e2ZvbGRlci5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdC1saW5lPiB7e2ZvbGRlci51cGRhdGVkIHwgZGF0ZX19IDwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Tm90ZXM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG5vdGUgb2Ygbm90ZXNcIj5cbiAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICA8ZGl2IG1hdC1saW5lPnt7bm90ZS5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdC1saW5lPiB7e25vdGUudXBkYXRlZCB8IGRhdGV9fSA8L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==