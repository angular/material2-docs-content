import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
    ListSectionsExample = tslib_1.__decorate([
        Component({
            selector: 'list-sections-example',
            template: "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
            styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"]
        })
    ], ListSectionsExample);
    return ListSectionsExample;
}());
export { ListSectionsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPeEM7O0dBRUc7QUFNSDtJQUxBO1FBTUUsWUFBTyxHQUFjO1lBQ25CO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7UUFDRixVQUFLLEdBQWM7WUFDakI7Z0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO0lBQ0osQ0FBQztJQXpCWSxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUVqQywwaEJBQXlDOztTQUMxQyxDQUFDO09BQ1csbUJBQW1CLENBeUIvQjtJQUFELDBCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWQ6IERhdGU7XG59XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlY3Rpb25zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlY3Rpb25zRXhhbXBsZSB7XG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUGhvdG9zJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE3LzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yaycsXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8yOC8xNicpLFxuICAgIH1cbiAgXTtcbiAgbm90ZXM6IFNlY3Rpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzIwLzE2JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2l0Y2hlbiBSZW1vZGVsJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzE4LzE2JyksXG4gICAgfVxuICBdO1xufVxuIl19