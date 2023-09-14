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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: ListSectionsExample, isStandalone: true, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', standalone: true, imports: [MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe], template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUUUsWUFBTyxHQUFjO1lBQ25CO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7UUFDRixVQUFLLEdBQWM7WUFDakI7Z0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO0tBQ0g7cUhBekJZLG1CQUFtQjt5R0FBbkIsbUJBQW1CLGlGQ3JCaEMsOGpCQWVBLHNIRElZLGFBQWEseXRCQUFFLEtBQUssa0hBQUUsYUFBYSxtTEFBRSxnQkFBZ0IsMEJBQUUsUUFBUTs7a0dBRTlELG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge05nRm9yLCBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXBkYXRlZDogRGF0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlY3Rpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0TGlzdE1vZHVsZSwgTmdGb3IsIE1hdEljb25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIERhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlY3Rpb25zRXhhbXBsZSB7XG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUGhvdG9zJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE3LzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yaycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8yOC8xNicpLFxuICAgIH0sXG4gIF07XG4gIG5vdGVzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1ZhY2F0aW9uIEl0aW5lcmFyeScsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMi8yMC8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0tpdGNoZW4gUmVtb2RlbCcsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xOC8xNicpLFxuICAgIH0sXG4gIF07XG59XG4iLCI8bWF0LWxpc3Q+XG4gIDxkaXYgbWF0LXN1YmhlYWRlcj5Gb2xkZXJzPC9kaXY+XG4gIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZm9sZGVyc1wiPlxuICAgIDxtYXQtaWNvbiBtYXRMaXN0SXRlbUljb24+Zm9sZGVyPC9tYXQtaWNvbj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtVGl0bGU+e3tmb2xkZXIubmFtZX19PC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0SXRlbUxpbmU+e3tmb2xkZXIudXBkYXRlZCB8IGRhdGV9fTwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Tm90ZXM8L2Rpdj5cbiAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG5vdGUgb2Ygbm90ZXNcIj5cbiAgICA8bWF0LWljb24gbWF0TGlzdEl0ZW1JY29uPm5vdGU8L21hdC1pY29uPlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT57e25vdGUubmFtZX19PC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0SXRlbUxpbmU+e3tub3RlLnVwZGF0ZWQgfCBkYXRlfX08L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==