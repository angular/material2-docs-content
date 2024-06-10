import { Component, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-spinner";
/**
 * @title Testing with MatProgressSpinnerHarness
 */
export class ProgressSpinnerHarnessExample {
    constructor() {
        this.value = signal(0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: ProgressSpinnerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.1", type: ProgressSpinnerHarnessExample, isStandalone: true, selector: "progress-spinner-harness-example", ngImport: i0, template: "<mat-progress-spinner mode=\"determinate\" [value]=\"value()\"></mat-progress-spinner>\n<mat-spinner></mat-spinner>\n", dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: ProgressSpinnerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-harness-example', standalone: true, imports: [MatProgressSpinnerModule], template: "<mat-progress-spinner mode=\"determinate\" [value]=\"value()\"></mat-progress-spinner>\n<mat-spinner></mat-spinner>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXItaGFybmVzcy9wcm9ncmVzcy1zcGlubmVyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci1oYXJuZXNzL3Byb2dyZXNzLXNwaW5uZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7OztBQUU1RTs7R0FFRztBQU9ILE1BQU0sT0FBTyw2QkFBNkI7SUFOMUM7UUFPRSxVQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25CO3FIQUZZLDZCQUE2Qjt5R0FBN0IsNkJBQTZCLDRGQ1oxQyx1SEFFQSwyQ0RRWSx3QkFBd0I7O2tHQUV2Qiw2QkFBNkI7a0JBTnpDLFNBQVM7K0JBQ0Usa0NBQWtDLGNBRWhDLElBQUksV0FDUCxDQUFDLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRQcm9ncmVzc1NwaW5uZXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLXNwaW5uZXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckhhcm5lc3NFeGFtcGxlIHtcbiAgdmFsdWUgPSBzaWduYWwoMCk7XG59XG4iLCI8bWF0LXByb2dyZXNzLXNwaW5uZXIgbW9kZT1cImRldGVybWluYXRlXCIgW3ZhbHVlXT1cInZhbHVlKClcIj48L21hdC1wcm9ncmVzcy1zcGlubmVyPlxuPG1hdC1zcGlubmVyPjwvbWF0LXNwaW5uZXI+XG4iXX0=