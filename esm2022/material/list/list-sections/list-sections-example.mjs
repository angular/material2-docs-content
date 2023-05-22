import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ListSectionsExample, isStandalone: true, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
export { ListSectionsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', standalone: true, imports: [MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe], template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPckQ7O0dBRUc7QUFDSCxNQU9hLG1CQUFtQjtJQVBoQztRQVFFLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztLQUNIOzhHQXpCWSxtQkFBbUI7a0dBQW5CLG1CQUFtQixpRkNyQmhDLDhqQkFlQSxzSERJWSxhQUFhLHl0QkFBRSxLQUFLLGtIQUFFLGFBQWEsbUxBQUUsZ0JBQWdCLDBCQUFFLFFBQVE7O1NBRTlELG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TmdGb3IsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkOiBEYXRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRMaXN0TW9kdWxlLCBOZ0ZvciwgTWF0SWNvbk1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgRGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VjdGlvbnNFeGFtcGxlIHtcbiAgZm9sZGVyczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQaG90b3MnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMS8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JlY2lwZXMnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTcvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb3JrJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzI4LzE2JyksXG4gICAgfSxcbiAgXTtcbiAgbm90ZXM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzIwLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2l0Y2hlbiBSZW1vZGVsJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE4LzE2JyksXG4gICAgfSxcbiAgXTtcbn1cbiIsIjxtYXQtbGlzdD5cbiAgPGRpdiBtYXQtc3ViaGVhZGVyPkZvbGRlcnM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGZvbGRlciBvZiBmb2xkZXJzXCI+XG4gICAgPG1hdC1pY29uIG1hdExpc3RJdGVtSWNvbj5mb2xkZXI8L21hdC1pY29uPlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT57e2ZvbGRlci5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtTGluZT57e2ZvbGRlci51cGRhdGVkIHwgZGF0ZX19PC9kaXY+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Ob3RlczwvZGl2PlxuICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbm90ZSBvZiBub3Rlc1wiPlxuICAgIDxtYXQtaWNvbiBtYXRMaXN0SXRlbUljb24+bm90ZTwvbWF0LWljb24+XG4gICAgPGRpdiBtYXRMaXN0SXRlbVRpdGxlPnt7bm90ZS5uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtTGluZT57e25vdGUudXBkYXRlZCB8IGRhdGV9fTwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG48L21hdC1saXN0PlxuIl19