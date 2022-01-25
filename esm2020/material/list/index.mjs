import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import { ListSingleSelectionExample } from './list-single-selection/list-single-selection-example';
import { ListHarnessExample } from './list-harness/list-harness-example';
import * as i0 from "@angular/core";
export { ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, };
const EXAMPLES = [
    ListHarnessExample,
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
];
export class ListExamplesModule {
}
ListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ListExamplesModule, declarations: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample], imports: [CommonModule, MatIconModule, MatListModule], exports: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample] });
ListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ListExamplesModule, imports: [[CommonModule, MatIconModule, MatListModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatIconModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7O0FBRXZFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsMEJBQTBCLEdBQzNCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDM0IsQ0FBQztBQU9GLE1BQU0sT0FBTyxrQkFBa0I7O29IQUFsQixrQkFBa0I7cUhBQWxCLGtCQUFrQixpQkFaN0Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLDBCQUEwQixhQUloQixZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsYUFScEQsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtxSEFRZixrQkFBa0IsWUFKcEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztnR0FJMUMsa0JBQWtCO2tCQUw5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO29CQUNyRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtMaXN0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2xpc3Qtb3ZlcnZpZXcvbGlzdC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNlY3Rpb25zRXhhbXBsZX0gZnJvbSAnLi9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTZWxlY3Rpb25FeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2VsZWN0aW9uL2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZX0gZnJvbSAnLi9saXN0LXNpbmdsZS1zZWxlY3Rpb24vbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0SGFybmVzc0V4YW1wbGV9IGZyb20gJy4vbGlzdC1oYXJuZXNzL2xpc3QtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgTGlzdEhhcm5lc3NFeGFtcGxlLFxuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbiAgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgTGlzdEhhcm5lc3NFeGFtcGxlLFxuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbiAgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRMaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RFeGFtcGxlc01vZHVsZSB7fVxuIl19