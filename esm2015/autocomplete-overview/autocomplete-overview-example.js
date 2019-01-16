/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.flag;
    /** @type {?} */
    State.prototype.name;
    /** @type {?} */
    State.prototype.population;
}
/**
 * \@title Autocomplete overview
 */
export class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(startWith(''), map(state => state ? this._filterStates(state) : this.states.slice()));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterStates(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
AutocompleteOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"]
            }] }
];
/** @nocollapse */
AutocompleteOverviewExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    AutocompleteOverviewExample.prototype.stateCtrl;
    /** @type {?} */
    AutocompleteOverviewExample.prototype.filteredStates;
    /** @type {?} */
    AutocompleteOverviewExample.prototype.states;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTlDLDJCQUlDOzs7SUFIQyxxQkFBYTs7SUFDYixxQkFBYTs7SUFDYiwyQkFBbUI7Ozs7O0FBV3JCLE1BQU0sT0FBTywyQkFBMkI7SUErQnRDO1FBOUJBLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRzlCLFdBQU0sR0FBWTtZQUNoQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLFFBQVE7O2dCQUVwQixJQUFJLEVBQUUsMEVBQTBFO2FBQ2pGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFVBQVUsRUFBRSxRQUFROztnQkFFcEIsSUFBSSxFQUFFLDRFQUE0RTthQUNuRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxRQUFROztnQkFFcEIsSUFBSSxFQUFFLHlFQUF5RTthQUNoRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxRQUFROztnQkFFcEIsSUFBSSxFQUFFLHVFQUF1RTthQUM5RTtTQUNGLENBQUM7UUFHQSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTthQUM5QyxJQUFJLENBQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUN0RSxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEtBQWE7O2NBQzNCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLDB5QkFBaUQ7O2FBRWxEOzs7Ozs7SUFFQyxnREFBOEI7O0lBQzlCLHFEQUFvQzs7SUFFcEMsNkNBeUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGZsYWc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwb3B1bGF0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIEF1dG9jb21wbGV0ZSBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlIHtcbiAgc3RhdGVDdHJsID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGZpbHRlcmVkU3RhdGVzOiBPYnNlcnZhYmxlPFN0YXRlW10+O1xuXG4gIHN0YXRlczogU3RhdGVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQXJrYW5zYXMnLFxuICAgICAgcG9wdWxhdGlvbjogJzIuOTc4TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9BcmthbnNhcy5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvRmxhZ19vZl9BcmthbnNhcy5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FsaWZvcm5pYScsXG4gICAgICBwb3B1bGF0aW9uOiAnMzkuMTRNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0NhbGlmb3JuaWEuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzAxL0ZsYWdfb2ZfQ2FsaWZvcm5pYS5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmxvcmlkYScsXG4gICAgICBwb3B1bGF0aW9uOiAnMjAuMjdNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0Zsb3JpZGEuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2Y3L0ZsYWdfb2ZfRmxvcmlkYS5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVGV4YXMnLFxuICAgICAgcG9wdWxhdGlvbjogJzI3LjQ3TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9UZXhhcy5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9UZXhhcy5zdmcnXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyZWRTdGF0ZXMgPSB0aGlzLnN0YXRlQ3RybC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAoc3RhdGUgPT4gc3RhdGUgPyB0aGlzLl9maWx0ZXJTdGF0ZXMoc3RhdGUpIDogdGhpcy5zdGF0ZXMuc2xpY2UoKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJTdGF0ZXModmFsdWU6IHN0cmluZyk6IFN0YXRlW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnN0YXRlcy5maWx0ZXIoc3RhdGUgPT4gc3RhdGUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbiAgfVxufVxuIl19