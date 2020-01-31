import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import * as i0 from "@angular/core";
export { BadgeOverviewExample };
var EXAMPLES = [
    BadgeOverviewExample,
];
var BadgeExamplesModule = /** @class */ (function () {
    function BadgeExamplesModule() {
    }
    BadgeExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatBadgeModule,
                        MatButtonModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    BadgeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: BadgeExamplesModule });
    BadgeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); }, imports: [[
                MatBadgeModule,
                MatButtonModule,
                MatIconModule,
            ]] });
    return BadgeExamplesModule;
}());
export { BadgeExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBadgeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQztBQUU5QixJQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtLQVVDOztnQkFWQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7OzJEQUNZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQVJyQjtnQkFDUCxjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsYUFBYTthQUNkOzhCQWpCSDtDQXNCQyxBQVZELElBVUM7U0FEWSxtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkFaOUIsb0JBQW9CLGFBS2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYSxhQVBmLG9CQUFvQjtrREFZVCxtQkFBbUI7Y0FUL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QmFkZ2VNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7QmFkZ2VPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYmFkZ2Utb3ZlcnZpZXcvYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7QmFkZ2VPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQmFkZ2VPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==