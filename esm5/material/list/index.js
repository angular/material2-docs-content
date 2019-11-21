import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import * as i0 from "@angular/core";
export { ListOverviewExample, ListSectionsExample, ListSelectionExample, };
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
                },] },
    ];
    ListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ListExamplesModule });
    ListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); }, imports: [[
                CommonModule,
                MatIconModule,
                MatListModule,
            ]] });
    return ListExamplesModule;
}());
export { ListExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample], imports: [CommonModule,
        MatIconModule,
        MatListModule], exports: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG9CQUFvQixHQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtLQVVDOztnQkFWQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7OzBEQUNZLGtCQUFrQjt1SEFBbEIsa0JBQWtCLGtCQVJwQjtnQkFDUCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsYUFBYTthQUNkOzZCQXpCSDtDQThCQyxBQVZELElBVUM7U0FEWSxrQkFBa0I7d0ZBQWxCLGtCQUFrQixtQkFkN0IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0IsYUFLbEIsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhLGFBVGYsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0I7a0RBWVQsa0JBQWtCO2NBVDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtMaXN0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2xpc3Qtb3ZlcnZpZXcvbGlzdC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNlY3Rpb25zRXhhbXBsZX0gZnJvbSAnLi9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTZWxlY3Rpb25FeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2VsZWN0aW9uL2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==