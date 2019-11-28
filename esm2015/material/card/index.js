/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/card/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ CardExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CardExamplesModule });
/** @nocollapse */ CardExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatCardModule,
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDcEI7QUFVRCxNQUFNLE9BQU8sa0JBQWtCOzs7WUFSOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOztzREFDWSxrQkFBa0I7bUhBQWxCLGtCQUFrQixrQkFQcEI7WUFDUCxlQUFlO1lBQ2YsYUFBYTtTQUNkO3dGQUlVLGtCQUFrQixtQkFaN0IsZ0JBQWdCO1FBQ2hCLG1CQUFtQixhQUtqQixlQUFlO1FBQ2YsYUFBYSxhQVBmLGdCQUFnQjtRQUNoQixtQkFBbUI7a0RBV1Isa0JBQWtCO2NBUjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtDYXJkRmFuY3lFeGFtcGxlfSBmcm9tICcuL2NhcmQtZmFuY3kvY2FyZC1mYW5jeS1leGFtcGxlJztcbmltcG9ydCB7Q2FyZE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9jYXJkLW92ZXJ2aWV3L2NhcmQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENhcmRGYW5jeUV4YW1wbGUsXG4gIENhcmRPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2FyZEZhbmN5RXhhbXBsZSxcbiAgQ2FyZE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=