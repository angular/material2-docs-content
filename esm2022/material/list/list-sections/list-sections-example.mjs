import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/material/divider";
/**
 * @title List with sections
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: ListSectionsExample, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i3.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i3.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i3.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i4.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i3.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i3.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "pipe", type: i1.DatePipe, name: "date" }] }); }
}
export { ListSectionsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPeEM7O0dBRUc7QUFDSCxNQUthLG1CQUFtQjtJQUxoQztRQU1FLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztLQUNIO3FIQXpCWSxtQkFBbUI7eUdBQW5CLG1CQUFtQiw2RENmaEMsOGpCQWVBOztTREFhLG1CQUFtQjtrR0FBbkIsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkOiBEYXRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWN0aW9uc0V4YW1wbGUge1xuICBmb2xkZXJzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1Bob3RvcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmVjaXBlcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xNy8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvcmsnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMjgvMTYnKSxcbiAgICB9LFxuICBdO1xuICBub3RlczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdWYWNhdGlvbiBJdGluZXJhcnknLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMjAvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLaXRjaGVuIFJlbW9kZWwnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTgvMTYnKSxcbiAgICB9LFxuICBdO1xufVxuIiwiPG1hdC1saXN0PlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Rm9sZGVyczwvZGl2PlxuICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgZm9sZGVyIG9mIGZvbGRlcnNcIj5cbiAgICA8bWF0LWljb24gbWF0TGlzdEl0ZW1JY29uPmZvbGRlcjwvbWF0LWljb24+XG4gICAgPGRpdiBtYXRMaXN0SXRlbVRpdGxlPnt7Zm9sZGVyLm5hbWV9fTwvZGl2PlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1MaW5lPnt7Zm9sZGVyLnVwZGF0ZWQgfCBkYXRlfX08L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgPGRpdiBtYXQtc3ViaGVhZGVyPk5vdGVzPC9kaXY+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBub3RlIG9mIG5vdGVzXCI+XG4gICAgPG1hdC1pY29uIG1hdExpc3RJdGVtSWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtVGl0bGU+e3tub3RlLm5hbWV9fTwvZGl2PlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1MaW5lPnt7bm90ZS51cGRhdGVkIHwgZGF0ZX19PC9kaXY+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbjwvbWF0LWxpc3Q+XG4iXX0=