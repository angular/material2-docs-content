/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import * as i0 from "@angular/core";
export { CardFancyExample, CardOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
];
export class CardExamplesModule {
}
CardExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CardExamplesModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: CardExamplesModule });
/** @nocollapse */ CardExamplesModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatCardModule,
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
        CardOverviewExample], imports: [MatButtonModule,
        MatCardModule], exports: [CardFancyExample,
        CardOverviewExample] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7O0FBRTFFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUNwQjtBQVVELE1BQU0sT0FBTyxrQkFBa0I7OztZQVI5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7OzZEQUNZLGtCQUFrQjs0SEFBbEIsa0JBQWtCLGtCQVBwQjtZQUNQLGVBQWU7WUFDZixhQUFhO1NBQ2Q7b0NBSVUsa0JBQWtCLG1CQVo3QixnQkFBZ0I7UUFDaEIsbUJBQW1CLGFBS2pCLGVBQWU7UUFDZixhQUFhLGFBUGYsZ0JBQWdCO1FBQ2hCLG1CQUFtQjttQ0FXUixrQkFBa0I7Y0FSOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge0NhcmRGYW5jeUV4YW1wbGV9IGZyb20gJy4vY2FyZC1mYW5jeS9jYXJkLWZhbmN5LWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NhcmQtb3ZlcnZpZXcvY2FyZC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2FyZEZhbmN5RXhhbXBsZSxcbiAgQ2FyZE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDYXJkRmFuY3lFeGFtcGxlLFxuICBDYXJkT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==