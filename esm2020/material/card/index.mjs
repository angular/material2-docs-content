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
export class CardExamplesModule {
}
CardExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CardExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CardExamplesModule, declarations: [CardFancyExample,
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
CardExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CardExamplesModule, imports: [[MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CardExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFcEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFkN0IsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsaUJBQWlCLGFBSVAsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsYUFWaEYsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsaUJBQWlCO2dIQVFOLGtCQUFrQixZQUpwQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7MkZBSXRFLGtCQUFrQjtrQkFMOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDO29CQUNqRixZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7Q2FyZEZhbmN5RXhhbXBsZX0gZnJvbSAnLi9jYXJkLWZhbmN5L2NhcmQtZmFuY3ktZXhhbXBsZSc7XG5pbXBvcnQge0NhcmRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2FyZC1vdmVydmlldy9jYXJkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vY2FyZC1oYXJuZXNzL2NhcmQtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Q2FyZEFjdGlvbnNFeGFtcGxlfSBmcm9tICcuL2NhcmQtYWN0aW9ucy9jYXJkLWFjdGlvbnMtZXhhbXBsZSc7XG5pbXBvcnQge0NhcmRNZWRpYVNpemVFeGFtcGxlfSBmcm9tICcuL2NhcmQtbWVkaWEtc2l6ZS9jYXJkLW1lZGlhLXNpemUtZXhhbXBsZSc7XG5pbXBvcnQge0NhcmRTdWJ0aXRsZUV4YW1wbGV9IGZyb20gJy4vY2FyZC1zdWJ0aXRsZS9jYXJkLXN1YnRpdGxlLWV4YW1wbGUnO1xuaW1wb3J0IHtDYXJkRm9vdGVyRXhhbXBsZX0gZnJvbSAnLi9jYXJkLWZvb3Rlci9jYXJkLWZvb3Rlci1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2FyZEZhbmN5RXhhbXBsZSxcbiAgQ2FyZE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2FyZEhhcm5lc3NFeGFtcGxlLFxuICBDYXJkQWN0aW9uc0V4YW1wbGUsXG4gIENhcmRNZWRpYVNpemVFeGFtcGxlLFxuICBDYXJkU3VidGl0bGVFeGFtcGxlLFxuICBDYXJkRm9vdGVyRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDYXJkRmFuY3lFeGFtcGxlLFxuICBDYXJkT3ZlcnZpZXdFeGFtcGxlLFxuICBDYXJkSGFybmVzc0V4YW1wbGUsXG4gIENhcmRBY3Rpb25zRXhhbXBsZSxcbiAgQ2FyZE1lZGlhU2l6ZUV4YW1wbGUsXG4gIENhcmRTdWJ0aXRsZUV4YW1wbGUsXG4gIENhcmRGb290ZXJFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0Q2FyZE1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=