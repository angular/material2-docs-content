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
    ListSectionsExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-sections-example',
                    template: "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
                    styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"]
                }] }
    ];
    return ListSectionsExample;
}());
export { ListSectionsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU94Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxZQUFPLEdBQWM7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztRQUNGLFVBQUssR0FBYztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkE5QkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBRWpDLDBoQkFBeUM7O2lCQUMxQzs7SUEwQkQsMEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXpCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXBkYXRlZDogRGF0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VjdGlvbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlY3Rpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VjdGlvbnNFeGFtcGxlIHtcbiAgZm9sZGVyczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQaG90b3MnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMS8xNicpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JlY2lwZXMnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTcvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb3JrJyxcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzI4LzE2JyksXG4gICAgfVxuICBdO1xuICBub3RlczogU2VjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdWYWNhdGlvbiBJdGluZXJhcnknLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMjAvMTYnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLaXRjaGVuIFJlbW9kZWwnLFxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTgvMTYnKSxcbiAgICB9XG4gIF07XG59XG4iXX0=