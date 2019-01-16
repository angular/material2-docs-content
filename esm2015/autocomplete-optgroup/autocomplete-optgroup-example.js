/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
/**
 * @record
 */
export function StateGroup() { }
if (false) {
    /** @type {?} */
    StateGroup.prototype.letter;
    /** @type {?} */
    StateGroup.prototype.names;
}
/** @type {?} */
export const _filter = (opt, value) => {
    /** @type {?} */
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
/**
 * \@title Option groups autocomplete
 */
export class AutocompleteOptgroupExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.stateGroupOptions = (/** @type {?} */ (this.stateForm.get('stateGroup'))).valueChanges
            .pipe(startWith(''), map(value => this._filterGroup(value)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
}
AutocompleteOptgroupExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-optgroup-example',
                template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
AutocompleteOptgroupExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateForm;
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateGroups;
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateGroupOptions;
    /**
     * @type {?}
     * @private
     */
    AutocompleteOptgroupExample.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTlDLGdDQUdDOzs7SUFGQyw0QkFBZTs7SUFDZiwyQkFBZ0I7OztBQUdsQixNQUFNLE9BQU8sT0FBTyxHQUFHLENBQUMsR0FBYSxFQUFFLEtBQWEsRUFBWSxFQUFFOztVQUMxRCxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUV2QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNFLENBQUM7Ozs7QUFXRCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBb0V0QyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQW5FbkMsY0FBUyxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25DLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsZ0JBQVcsR0FBaUIsQ0FBQztnQkFDM0IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO2FBQ3BELEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JB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LE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDMUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7O1lBNUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxnakJBQW1EOzthQUVwRDs7OztZQXRCTyxXQUFXOzs7O0lBeUJqQixnREFFRzs7SUFFSCxrREEyREc7O0lBRUgsd0RBQTRDOzs7OztJQUVoQyx5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUdyb3VwIHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIG5hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IF9maWx0ZXIgPSAob3B0OiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiBvcHQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbn07XG5cbi8qKlxuICogQHRpdGxlIE9wdGlvbiBncm91cHMgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0ZUZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIHN0YXRlR3JvdXA6ICcnLFxuICB9KTtcblxuICBzdGF0ZUdyb3VwczogU3RhdGVHcm91cFtdID0gW3tcbiAgICBsZXR0ZXI6ICdBJyxcbiAgICBuYW1lczogWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0MnLFxuICAgIG5hbWVzOiBbJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRCcsXG4gICAgbmFtZXM6IFsnRGVsYXdhcmUnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRicsXG4gICAgbmFtZXM6IFsnRmxvcmlkYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdHJyxcbiAgICBuYW1lczogWydHZW9yZ2lhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0gnLFxuICAgIG5hbWVzOiBbJ0hhd2FpaSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdJJyxcbiAgICBuYW1lczogWydJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSycsXG4gICAgbmFtZXM6IFsnS2Fuc2FzJywgJ0tlbnR1Y2t5J11cbiAgfSwge1xuICAgIGxldHRlcjogJ0wnLFxuICAgIG5hbWVzOiBbJ0xvdWlzaWFuYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdNJyxcbiAgICBuYW1lczogWydNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJyxcbiAgICAgICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdOJyxcbiAgICBuYW1lczogWydOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JyxcbiAgICAgICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJywgJ05vcnRoIERha290YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdPJyxcbiAgICBuYW1lczogWydPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbiddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdQJyxcbiAgICBuYW1lczogWydQZW5uc3lsdmFuaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUicsXG4gICAgbmFtZXM6IFsnUmhvZGUgSXNsYW5kJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1MnLFxuICAgIG5hbWVzOiBbJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdUJyxcbiAgICBuYW1lczogWydUZW5uZXNzZWUnLCAnVGV4YXMnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVScsXG4gICAgbmFtZXM6IFsnVXRhaCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdWJyxcbiAgICBuYW1lczogWydWZXJtb250JywgJ1ZpcmdpbmlhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1cnLFxuICAgIG5hbWVzOiBbJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddXG4gIH1dO1xuXG4gIHN0YXRlR3JvdXBPcHRpb25zOiBPYnNlcnZhYmxlPFN0YXRlR3JvdXBbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMuc3RhdGVGb3JtLmdldCgnc3RhdGVHcm91cCcpIS52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcbiAgICAgICAgLm1hcChncm91cCA9PiAoe2xldHRlcjogZ3JvdXAubGV0dGVyLCBuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHM7XG4gIH1cbn1cbiJdfQ==