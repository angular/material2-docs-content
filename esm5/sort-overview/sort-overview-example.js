import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Sorting overview
 */
var SortOverviewExample = /** @class */ (function () {
    function SortOverviewExample() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    SortOverviewExample.prototype.sortData = function (sort) {
        var data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    };
    SortOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'sort-overview-example',
            template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n",
            styles: [".mat-sort-header-container {\n  align-items: center;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SortOverviewExample);
    return SortOverviewExample;
}());
export { SortOverviewExample };
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NvcnQtb3ZlcnZpZXcvc29ydC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBV3hDOztHQUVHO0FBTUg7SUFXRTtRQVZBLGFBQVEsR0FBYztZQUNwQixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQzFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQy9ELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQy9ELEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1NBQ3JFLENBQUM7UUFLQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7WUFDdkMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNuQixLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkQsS0FBSyxVQUFVLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9ELEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxTQUFTLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzVELE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakNVLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLHVqQkFBeUM7O1NBRTFDLENBQUM7O09BQ1csbUJBQW1CLENBa0MvQjtJQUFELDBCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FsQ1ksbUJBQW1CO0FBb0NoQyxTQUFTLE9BQU8sQ0FBQyxDQUFrQixFQUFFLENBQWtCLEVBQUUsS0FBYztJQUNyRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlc3NlcnQge1xuICBjYWxvcmllczogbnVtYmVyO1xuICBjYXJiczogbnVtYmVyO1xuICBmYXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm90ZWluOiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIFNvcnRpbmcgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29ydC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzb3J0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzb3J0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRPdmVydmlld0V4YW1wbGUge1xuICBkZXNzZXJ0czogRGVzc2VydFtdID0gW1xuICAgIHtuYW1lOiAnRnJvemVuIHlvZ3VydCcsIGNhbG9yaWVzOiAxNTksIGZhdDogNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIGNhbG9yaWVzOiAyMzcsIGZhdDogOSwgY2FyYnM6IDM3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0VjbGFpcicsIGNhbG9yaWVzOiAyNjIsIGZhdDogMTYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNn0sXG4gICAge25hbWU6ICdDdXBjYWtlJywgY2Fsb3JpZXM6IDMwNSwgZmF0OiA0LCBjYXJiczogNjcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnR2luZ2VyYnJlYWQnLCBjYWxvcmllczogMzU2LCBmYXQ6IDE2LCBjYXJiczogNDksIHByb3RlaW46IDR9LFxuICBdO1xuXG4gIHNvcnRlZERhdGE6IERlc3NlcnRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNvcnRlZERhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG4gIH1cblxuICBzb3J0RGF0YShzb3J0OiBTb3J0KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGlzQXNjID0gc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnO1xuICAgICAgc3dpdGNoIChzb3J0LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICduYW1lJzogcmV0dXJuIGNvbXBhcmUoYS5uYW1lLCBiLm5hbWUsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnY2Fsb3JpZXMnOiByZXR1cm4gY29tcGFyZShhLmNhbG9yaWVzLCBiLmNhbG9yaWVzLCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ2ZhdCc6IHJldHVybiBjb21wYXJlKGEuZmF0LCBiLmZhdCwgaXNBc2MpO1xuICAgICAgICBjYXNlICdjYXJicyc6IHJldHVybiBjb21wYXJlKGEuY2FyYnMsIGIuY2FyYnMsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAncHJvdGVpbic6IHJldHVybiBjb21wYXJlKGEucHJvdGVpbiwgYi5wcm90ZWluLCBpc0FzYyk7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGlzQXNjOiBib29sZWFuKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiJdfQ==