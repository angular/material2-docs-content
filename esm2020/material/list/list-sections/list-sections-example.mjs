import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/material/divider";
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
ListSectionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSectionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ListSectionsExample, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i3.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i3.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i3.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i4.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i3.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i3.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "pipe", type: i1.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTUUsWUFBTyxHQUFjO1lBQ25CO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7UUFDRixVQUFLLEdBQWM7WUFDakI7Z0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO0tBQ0g7O2dIQXpCWSxtQkFBbUI7b0dBQW5CLG1CQUFtQiw2RENmaEMsOGpCQWVBOzJGREFhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXBkYXRlZDogRGF0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlY3Rpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VjdGlvbnNFeGFtcGxlIHtcbiAgZm9sZGVyczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQaG90b3MnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMS8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JlY2lwZXMnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTcvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb3JrJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzI4LzE2JyksXG4gICAgfSxcbiAgXTtcbiAgbm90ZXM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzIwLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2l0Y2hlbiBSZW1vZGVsJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE4LzE2JyksXG4gICAgfSxcbiAgXTtcbn1cbiIsIjxtYXQtbGlzdD5cbiAgPGRpdiBtYXQtc3ViaGVhZGVyPkZvbGRlcnM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGZvbGRlciBvZiBmb2xkZXJzXCI+XG4gICAgPG1hdC1pY29uIG1hdExpc3RJdGVtSWNvbj5mb2xkZXI8L21hdC1pY29uPlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT57e2ZvbGRlci5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtTGluZT57e2ZvbGRlci51cGRhdGVkIHwgZGF0ZX19PC9kaXY+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Ob3RlczwvZGl2PlxuICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbm90ZSBvZiBub3Rlc1wiPlxuICAgIDxtYXQtaWNvbiBtYXRMaXN0SXRlbUljb24+bm90ZTwvbWF0LWljb24+XG4gICAgPGRpdiBtYXRMaXN0SXRlbVRpdGxlPnt7bm90ZS5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtTGluZT57e25vdGUudXBkYXRlZCB8IGRhdGV9fTwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG48L21hdC1saXN0PlxuIl19