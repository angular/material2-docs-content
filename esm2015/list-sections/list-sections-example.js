/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * @record
 */
export function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.name;
    /** @type {?} */
    Section.prototype.updated;
}
/**
 * \@title List with sections
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
ListSectionsExample.decorators = [
    { type: Component, args: [{
                selector: 'list-sections-example',
                template: "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
                styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    ListSectionsExample.prototype.folders;
    /** @type {?} */
    ListSectionsExample.prototype.notes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2xpc3Qtc2VjdGlvbnMvbGlzdC1zZWN0aW9ucy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYzs7Ozs7QUFXaEIsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO1FBQ0YsVUFBSyxHQUFjO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTlCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFFakMsMGhCQUF5Qzs7YUFDMUM7Ozs7SUFFQyxzQ0FhRTs7SUFDRixvQ0FTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkOiBEYXRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWN0aW9uc0V4YW1wbGUge1xuICBmb2xkZXJzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1Bob3RvcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmVjaXBlcycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xNy8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvcmsnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMjgvMTYnKSxcbiAgICB9XG4gIF07XG4gIG5vdGVzOiBTZWN0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1ZhY2F0aW9uIEl0aW5lcmFyeScsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMi8yMC8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0tpdGNoZW4gUmVtb2RlbCcsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xOC8xNicpLFxuICAgIH1cbiAgXTtcbn1cbiJdfQ==