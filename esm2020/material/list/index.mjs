import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule } from '@angular/material/legacy-list';
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
ListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ListExamplesModule, declarations: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample], imports: [CommonModule, MatIconModule, MatLegacyListModule], exports: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample] });
ListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ListExamplesModule, imports: [CommonModule, MatIconModule, MatLegacyListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatIconModule, MatLegacyListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNqRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUMzQixDQUFDO0FBT0YsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjtxSEFBbEIsa0JBQWtCLGlCQVo3QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsMEJBQTBCLGFBSWhCLFlBQVksRUFBRSxhQUFhLEVBQUUsbUJBQW1CLGFBUjFELGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiwwQkFBMEI7cUhBUWYsa0JBQWtCLFlBSm5CLFlBQVksRUFBRSxhQUFhLEVBQUUsbUJBQW1CO2dHQUkvQyxrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztvQkFDM0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRMZWdhY3lMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktbGlzdCc7XG5pbXBvcnQge0xpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2VjdGlvbnNFeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2VjdGlvbnMvbGlzdC1zZWN0aW9ucy1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNlbGVjdGlvbkV4YW1wbGV9IGZyb20gJy4vbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTaW5nbGVTZWxlY3Rpb25FeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9saXN0LWhhcm5lc3MvbGlzdC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBMaXN0SGFybmVzc0V4YW1wbGUsXG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxuICBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBMaXN0SGFybmVzc0V4YW1wbGUsXG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxuICBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdExlZ2FjeUxpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=