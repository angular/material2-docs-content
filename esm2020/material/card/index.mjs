import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import { CardHarnessExample } from './card-harness/card-harness-example';
import { CardActionsExample } from './card-actions/card-actions-example';
import { CardMediaSizeExample } from './card-media-size/card-media-size-example';
import { CardSubtitleExample } from './card-subtitle/card-subtitle-example';
import { CardFooterExample } from './card-footer/card-footer-example';
import * as i0 from "@angular/core";
export { CardFancyExample, CardOverviewExample, CardHarnessExample, CardActionsExample, CardMediaSizeExample, CardSubtitleExample, CardFooterExample, };
const EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
    CardHarnessExample,
    CardActionsExample,
    CardMediaSizeExample,
    CardSubtitleExample,
    CardFooterExample,
];
class CardExamplesModule {
}
CardExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CardExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.2", ngImport: i0, type: CardExamplesModule, declarations: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample], imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule], exports: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample] });
CardExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CardExamplesModule, imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule] });
export { CardExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CardExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFcEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGLE1BS2Esa0JBQWtCOztzSEFBbEIsa0JBQWtCO3VIQUFsQixrQkFBa0IsaUJBZDdCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGlCQUFpQixhQUlQLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLGFBVmhGLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGlCQUFpQjt1SEFRTixrQkFBa0IsWUFKbkIsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0I7U0FJckUsa0JBQWtCO2tHQUFsQixrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDakYsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge0NhcmRGYW5jeUV4YW1wbGV9IGZyb20gJy4vY2FyZC1mYW5jeS9jYXJkLWZhbmN5LWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NhcmQtb3ZlcnZpZXcvY2FyZC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7Q2FyZEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NhcmQtaGFybmVzcy9jYXJkLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge0NhcmRBY3Rpb25zRXhhbXBsZX0gZnJvbSAnLi9jYXJkLWFjdGlvbnMvY2FyZC1hY3Rpb25zLWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkTWVkaWFTaXplRXhhbXBsZX0gZnJvbSAnLi9jYXJkLW1lZGlhLXNpemUvY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkU3VidGl0bGVFeGFtcGxlfSBmcm9tICcuL2NhcmQtc3VidGl0bGUvY2FyZC1zdWJ0aXRsZS1leGFtcGxlJztcbmltcG9ydCB7Q2FyZEZvb3RlckV4YW1wbGV9IGZyb20gJy4vY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENhcmRGYW5jeUV4YW1wbGUsXG4gIENhcmRPdmVydmlld0V4YW1wbGUsXG4gIENhcmRIYXJuZXNzRXhhbXBsZSxcbiAgQ2FyZEFjdGlvbnNFeGFtcGxlLFxuICBDYXJkTWVkaWFTaXplRXhhbXBsZSxcbiAgQ2FyZFN1YnRpdGxlRXhhbXBsZSxcbiAgQ2FyZEZvb3RlckV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2FyZEZhbmN5RXhhbXBsZSxcbiAgQ2FyZE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2FyZEhhcm5lc3NFeGFtcGxlLFxuICBDYXJkQWN0aW9uc0V4YW1wbGUsXG4gIENhcmRNZWRpYVNpemVFeGFtcGxlLFxuICBDYXJkU3VidGl0bGVFeGFtcGxlLFxuICBDYXJkRm9vdGVyRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdFByb2dyZXNzQmFyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRFeGFtcGxlc01vZHVsZSB7fVxuIl19