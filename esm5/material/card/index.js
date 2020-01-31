import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import * as i0 from "@angular/core";
export { CardFancyExample, CardOverviewExample, };
var EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
];
var CardExamplesModule = /** @class */ (function () {
    function CardExamplesModule() {
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
    CardExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CardExamplesModule });
    CardExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatCardModule,
            ]] });
    return CardExamplesModule;
}());
export { CardExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
        CardOverviewExample], imports: [MatButtonModule,
        MatCardModule], exports: [CardFancyExample,
        CardOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFMUUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUNwQixDQUFDO0FBRUY7SUFBQTtLQVNDOztnQkFUQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOzswREFDWSxrQkFBa0I7dUhBQWxCLGtCQUFrQixrQkFQcEI7Z0JBQ1AsZUFBZTtnQkFDZixhQUFhO2FBQ2Q7NkJBcEJIO0NBeUJDLEFBVEQsSUFTQztTQURZLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQVo3QixnQkFBZ0I7UUFDaEIsbUJBQW1CLGFBS2pCLGVBQWU7UUFDZixhQUFhLGFBUGYsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtrREFXUixrQkFBa0I7Y0FSOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge0NhcmRGYW5jeUV4YW1wbGV9IGZyb20gJy4vY2FyZC1mYW5jeS9jYXJkLWZhbmN5LWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NhcmQtb3ZlcnZpZXcvY2FyZC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2FyZEZhbmN5RXhhbXBsZSxcbiAgQ2FyZE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDYXJkRmFuY3lFeGFtcGxlLFxuICBDYXJkT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==