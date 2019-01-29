import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
/**
 * @title Autocomplete overview
 */
var AutocompleteOverviewExample = /** @class */ (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
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
            .pipe(startWith(''), map(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteOverviewExample.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'autocomplete-overview-example',
            template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n",
            styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AutocompleteOverviewExample);
    return AutocompleteOverviewExample;
}());
export { AutocompleteOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBUTlDOztHQUVHO0FBTUg7SUErQkU7UUFBQSxpQkFNQztRQXBDRCxjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUc5QixXQUFNLEdBQVk7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiwrREFBK0Q7Z0JBQy9ELElBQUksRUFBRSwwRUFBMEU7YUFDakY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLGlFQUFpRTtnQkFDakUsSUFBSSxFQUFFLDRFQUE0RTthQUNuRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiw4REFBOEQ7Z0JBQzlELElBQUksRUFBRSx5RUFBeUU7YUFDaEY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsNERBQTREO2dCQUM1RCxJQUFJLEVBQUUsdUVBQXVFO2FBQzlFO1NBQ0YsQ0FBQztRQUdBLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQzlDLElBQUksQ0FDSCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUF2RCxDQUF1RCxDQUFDLENBQ3RFLENBQUM7SUFDTixDQUFDO0lBRU8sbURBQWEsR0FBckIsVUFBc0IsS0FBYTtRQUNqQyxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUEzQ1UsMkJBQTJCO1FBTHZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsMHlCQUFpRDs7U0FFbEQsQ0FBQzs7T0FDVywyQkFBMkIsQ0E0Q3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgZmxhZzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvcHVsYXRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQXV0b2NvbXBsZXRlIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUge1xuICBzdGF0ZUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRTdGF0ZXM6IE9ic2VydmFibGU8U3RhdGVbXT47XG5cbiAgc3RhdGVzOiBTdGF0ZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBcmthbnNhcycsXG4gICAgICBwb3B1bGF0aW9uOiAnMi45NzhNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0Fya2Fuc2FzLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9GbGFnX29mX0Fya2Fuc2FzLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYWxpZm9ybmlhJyxcbiAgICAgIHBvcHVsYXRpb246ICczOS4xNE0nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfQ2FsaWZvcm5pYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzAvMDEvRmxhZ19vZl9DYWxpZm9ybmlhLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGbG9yaWRhJyxcbiAgICAgIHBvcHVsYXRpb246ICcyMC4yN00nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfRmxvcmlkYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9GbG9yaWRhLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUZXhhcycsXG4gICAgICBwb3B1bGF0aW9uOiAnMjcuNDdNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX1RleGFzLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZi9mNy9GbGFnX29mX1RleGFzLnN2ZydcbiAgICB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFN0YXRlcyA9IHRoaXMuc3RhdGVDdHJsLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZSA/IHRoaXMuX2ZpbHRlclN0YXRlcyhzdGF0ZSkgOiB0aGlzLnN0YXRlcy5zbGljZSgpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlclN0YXRlcyh2YWx1ZTogc3RyaW5nKTogU3RhdGVbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmZpbHRlcihzdGF0ZSA9PiBzdGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG59XG4iXX0=