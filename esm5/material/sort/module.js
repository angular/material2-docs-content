import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { SortOverviewExample } from './sort-overview/sort-overview-example';
var EXAMPLES = [
    SortOverviewExample,
];
var SortExamplesModule = /** @class */ (function () {
    function SortExamplesModule() {
    }
    SortExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatSortModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return SortExamplesModule;
}());
export { SortExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUUxRSxJQUFNLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtDQUNwQixDQUFDO0FBRUY7SUFBQTtJQVNBLENBQUM7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQseUJBQUM7Q0FBQSxBQVRELElBU0M7U0FEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7U29ydE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zb3J0LW92ZXJ2aWV3L3NvcnQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTb3J0T3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU29ydEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==