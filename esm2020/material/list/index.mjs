import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import { ListSingleSelectionExample } from './list-single-selection/list-single-selection-example';
import { ListHarnessExample } from './list-harness/list-harness-example';
import { ListVariantsExample } from './list-variants/list-variants-example';
import * as i0 from "@angular/core";
export { ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, ListVariantsExample, };
const EXAMPLES = [
    ListHarnessExample,
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
    ListVariantsExample,
];
export class ListExamplesModule {
}
ListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ListExamplesModule, declarations: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample,
        ListVariantsExample], imports: [CommonModule, MatIconModule, MatListModule], exports: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample,
        ListVariantsExample] });
ListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ListExamplesModule, imports: [CommonModule, MatIconModule, MatListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatIconModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7O0FBRTFFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLG1CQUFtQixHQUNwQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjtxSEFBbEIsa0JBQWtCLGlCQWI3QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLG1CQUFtQixhQUlULFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxhQVRwRCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLG1CQUFtQjtxSEFRUixrQkFBa0IsWUFKbkIsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhO2dHQUl6QyxrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7b0JBQ3JELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge0xpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2VjdGlvbnNFeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2VjdGlvbnMvbGlzdC1zZWN0aW9ucy1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNlbGVjdGlvbkV4YW1wbGV9IGZyb20gJy4vbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTaW5nbGVTZWxlY3Rpb25FeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9saXN0LWhhcm5lc3MvbGlzdC1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0VmFyaWFudHNFeGFtcGxlfSBmcm9tICcuL2xpc3QtdmFyaWFudHMvbGlzdC12YXJpYW50cy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgTGlzdEhhcm5lc3NFeGFtcGxlLFxuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbiAgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUsXG4gIExpc3RWYXJpYW50c0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgTGlzdEhhcm5lc3NFeGFtcGxlLFxuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbiAgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUsXG4gIExpc3RWYXJpYW50c0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RFeGFtcGxlc01vZHVsZSB7fVxuIl19