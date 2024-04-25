import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.5", type: ListSectionsExample, isStandalone: true, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  @for (folder of folders; track folder) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>folder</mat-icon>\n      <div matListItemTitle>{{folder.name}}</div>\n      <div matListItemLine>{{folder.updated | date}}</div>\n    </mat-list-item>\n  }\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  @for (note of notes; track note) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>note</mat-icon>\n      <div matListItemTitle>{{note.name}}</div>\n      <div matListItemLine>{{note.updated | date}}</div>\n    </mat-list-item>\n  }\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', standalone: true, imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe], template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  @for (folder of folders; track folder) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>folder</mat-icon>\n      <div matListItemTitle>{{folder.name}}</div>\n      <div matListItemLine>{{folder.updated | date}}</div>\n    </mat-list-item>\n  }\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  @for (note of notes; track note) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>note</mat-icon>\n      <div matListItemTitle>{{note.name}}</div>\n      <div matListItemLine>{{note.updated | date}}</div>\n    </mat-list-item>\n  }\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU9yRDs7R0FFRztBQVFILE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFRRSxZQUFPLEdBQWM7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztRQUNGLFVBQUssR0FBYztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7S0FDSDtxSEF6QlksbUJBQW1CO3lHQUFuQixtQkFBbUIsaUZDckJoQyxnbkJBbUJBLHNIREFZLGFBQWEsd3RCQUFFLGFBQWEsbUxBQUUsZ0JBQWdCLDBCQUFFLFFBQVE7O2tHQUV2RCxtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsdUJBQXVCLGNBR3JCLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkOiBEYXRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuY3NzJyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRMaXN0TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlLCBEYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWN0aW9uc0V4YW1wbGUge1xuICBmb2xkZXJzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1Bob3RvcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmVjaXBlcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xNy8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvcmsnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMjgvMTYnKSxcbiAgICB9LFxuICBdO1xuICBub3RlczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdWYWNhdGlvbiBJdGluZXJhcnknLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMjAvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLaXRjaGVuIFJlbW9kZWwnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTgvMTYnKSxcbiAgICB9LFxuICBdO1xufVxuIiwiPG1hdC1saXN0PlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Rm9sZGVyczwvZGl2PlxuICBAZm9yIChmb2xkZXIgb2YgZm9sZGVyczsgdHJhY2sgZm9sZGVyKSB7XG4gICAgPG1hdC1saXN0LWl0ZW0+XG4gICAgICA8bWF0LWljb24gbWF0TGlzdEl0ZW1JY29uPmZvbGRlcjwvbWF0LWljb24+XG4gICAgICA8ZGl2IG1hdExpc3RJdGVtVGl0bGU+e3tmb2xkZXIubmFtZX19PC9kaXY+XG4gICAgICA8ZGl2IG1hdExpc3RJdGVtTGluZT57e2ZvbGRlci51cGRhdGVkIHwgZGF0ZX19PC9kaXY+XG4gICAgPC9tYXQtbGlzdC1pdGVtPlxuICB9XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Tm90ZXM8L2Rpdj5cbiAgQGZvciAobm90ZSBvZiBub3RlczsgdHJhY2sgbm90ZSkge1xuICAgIDxtYXQtbGlzdC1pdGVtPlxuICAgICAgPG1hdC1pY29uIG1hdExpc3RJdGVtSWNvbj5ub3RlPC9tYXQtaWNvbj5cbiAgICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT57e25vdGUubmFtZX19PC9kaXY+XG4gICAgICA8ZGl2IG1hdExpc3RJdGVtTGluZT57e25vdGUudXBkYXRlZCB8IGRhdGV9fTwvZGl2PlxuICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgfVxuPC9tYXQtbGlzdD5cbiJdfQ==