import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import { CardHarnessExample } from './card-harness/card-harness-example';
import * as i0 from "@angular/core";
export { CardFancyExample, CardOverviewExample, CardHarnessExample, };
const EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
    CardHarnessExample,
];
export class CardExamplesModule {
}
CardExamplesModule.ɵfac = function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); };
CardExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CardExamplesModule });
CardExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample], imports: [MatButtonModule,
        MatCardModule], exports: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsa0JBQWtCLEdBQ25CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ25CLENBQUM7QUFXRixNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO29FQUFsQixrQkFBa0I7d0VBUnBCO1lBQ1AsZUFBZTtZQUNmLGFBQWE7U0FDZDt1RkFLVSxrQkFBa0I7Y0FUOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQjs7d0ZBQ1ksa0JBQWtCLG1CQWQ3QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGtCQUFrQixhQUtoQixlQUFlO1FBQ2YsYUFBYSxhQVJmLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge0NhcmRGYW5jeUV4YW1wbGV9IGZyb20gJy4vY2FyZC1mYW5jeS9jYXJkLWZhbmN5LWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NhcmQtb3ZlcnZpZXcvY2FyZC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7Q2FyZEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NhcmQtaGFybmVzcy9jYXJkLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENhcmRGYW5jeUV4YW1wbGUsXG4gIENhcmRPdmVydmlld0V4YW1wbGUsXG4gIENhcmRIYXJuZXNzRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDYXJkRmFuY3lFeGFtcGxlLFxuICBDYXJkT3ZlcnZpZXdFeGFtcGxlLFxuICBDYXJkSGFybmVzc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRXhhbXBsZXNNb2R1bGUge1xufVxuIl19