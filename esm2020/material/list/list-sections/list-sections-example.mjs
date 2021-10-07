import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/divider";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
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
ListSectionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSectionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: ListSectionsExample, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], components: [{ type: i1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], directives: [{ type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.MatListIconCssMatStyler, selector: "[mat-list-icon], [matListIcon]" }, { type: i5.MatLine, selector: "[mat-line], [matLine]" }], pipes: { "date": i4.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBT3hDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztLQUNIOzt3SEF6QlksbUJBQW1COzRHQUFuQixtQkFBbUIsNkRDZmhDLGdpQkFlQTttR0RBYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWQ6IERhdGU7XG59XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlY3Rpb25zRXhhbXBsZSB7XG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUGhvdG9zJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE3LzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yaycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8yOC8xNicpLFxuICAgIH1cbiAgXTtcbiAgbm90ZXM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzIwLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2l0Y2hlbiBSZW1vZGVsJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE4LzE2JyksXG4gICAgfVxuICBdO1xufVxuIiwiPG1hdC1saXN0PlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Rm9sZGVyczwvZGl2PlxuICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgZm9sZGVyIG9mIGZvbGRlcnNcIj5cbiAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5mb2xkZXI8L21hdC1pY29uPlxuICAgIDxkaXYgbWF0LWxpbmU+e3tmb2xkZXIubmFtZX19PC9kaXY+XG4gICAgPGRpdiBtYXQtbGluZT4ge3tmb2xkZXIudXBkYXRlZCB8IGRhdGV9fSA8L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgPGRpdiBtYXQtc3ViaGVhZGVyPk5vdGVzPC9kaXY+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBub3RlIG9mIG5vdGVzXCI+XG4gICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+bm90ZTwvbWF0LWljb24+XG4gICAgPGRpdiBtYXQtbGluZT57e25vdGUubmFtZX19PC9kaXY+XG4gICAgPGRpdiBtYXQtbGluZT4ge3tub3RlLnVwZGF0ZWQgfCBkYXRlfX0gPC9kaXY+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbjwvbWF0LWxpc3Q+XG4iXX0=