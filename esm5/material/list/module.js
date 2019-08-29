import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
var EXAMPLES = [
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
];
var ListExamplesModule = /** @class */ (function () {
    function ListExamplesModule() {
    }
    ListExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatListModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return ListExamplesModule;
}());
export { ListExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFN0UsSUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtJQVVBLENBQUM7O2dCQVZBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCx5QkFBQztDQUFBLEFBVkQsSUFVQztTQURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9saXN0LW92ZXJ2aWV3L2xpc3Qtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTZWN0aW9uc0V4YW1wbGV9IGZyb20gJy4vbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2VsZWN0aW9uRXhhbXBsZX0gZnJvbSAnLi9saXN0LXNlbGVjdGlvbi9saXN0LXNlbGVjdGlvbi1leGFtcGxlJztcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19