/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/load-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Asynchronously loads the specified example and returns its component factory.
 * @param {?} name
 * @param {?} injector
 * @return {?}
 * @this {*}
 */
export function loadExampleFactory(name, injector) {
    return __awaiter(this, void 0, void 0, function* () {
        const { componentName, module } = EXAMPLE_COMPONENTS[name];
        // TODO(devversion): remove the NgFactory import when the `--config=view-engine` switch is gone.
        const [moduleFactoryExports, moduleExports] = yield Promise.all([
            import(module.importSpecifier + '/index.ngfactory'),
            import(module.importSpecifier)
        ]);
        /** @type {?} */
        const moduleFactory = moduleFactoryExports[`${module.name}NgFactory`];
        /** @type {?} */
        const componentType = moduleExports[componentName];
        return moduleFactory.create(injector)
            .componentFactoryResolver.resolveComponentFactory(componentType);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbG9hZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7QUFHcEQsTUFBTSxVQUFnQixrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsUUFBa0I7O2NBRWpFLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQzs7Y0FFbEQsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsa0JBQWtCLENBQUM7WUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7U0FDL0IsQ0FBQzs7Y0FDSSxhQUFhLEdBQXlCLG9CQUFvQixDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDOztjQUNyRixhQUFhLEdBQWMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM3RCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2xDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudEZhY3RvcnksIEluamVjdG9yLCBOZ01vZHVsZUZhY3RvcnksIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFWEFNUExFX0NPTVBPTkVOVFN9IGZyb20gJy4vZXhhbXBsZS1tb2R1bGUnO1xuXG4vKiogQXN5bmNocm9ub3VzbHkgbG9hZHMgdGhlIHNwZWNpZmllZCBleGFtcGxlIGFuZCByZXR1cm5zIGl0cyBjb21wb25lbnQgZmFjdG9yeS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRXhhbXBsZUZhY3RvcnkobmFtZTogc3RyaW5nLCBpbmplY3RvcjogSW5qZWN0b3IpXG4gICAgOiBQcm9taXNlPENvbXBvbmVudEZhY3Rvcnk8YW55Pj4ge1xuICBjb25zdCB7Y29tcG9uZW50TmFtZSwgbW9kdWxlfSA9IEVYQU1QTEVfQ09NUE9ORU5UU1tuYW1lXTtcbiAgLy8gVE9ETyhkZXZ2ZXJzaW9uKTogcmVtb3ZlIHRoZSBOZ0ZhY3RvcnkgaW1wb3J0IHdoZW4gdGhlIGAtLWNvbmZpZz12aWV3LWVuZ2luZWAgc3dpdGNoIGlzIGdvbmUuXG4gIGNvbnN0IFttb2R1bGVGYWN0b3J5RXhwb3J0cywgbW9kdWxlRXhwb3J0c10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgaW1wb3J0KG1vZHVsZS5pbXBvcnRTcGVjaWZpZXIgKyAnL2luZGV4Lm5nZmFjdG9yeScpLFxuICAgIGltcG9ydChtb2R1bGUuaW1wb3J0U3BlY2lmaWVyKVxuICBdKTtcbiAgY29uc3QgbW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4gPSBtb2R1bGVGYWN0b3J5RXhwb3J0c1tgJHttb2R1bGUubmFtZX1OZ0ZhY3RvcnlgXTtcbiAgY29uc3QgY29tcG9uZW50VHlwZTogVHlwZTxhbnk+ID0gbW9kdWxlRXhwb3J0c1tjb21wb25lbnROYW1lXTtcbiAgcmV0dXJuIG1vZHVsZUZhY3RvcnkuY3JlYXRlKGluamVjdG9yKVxuICAgIC5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG59XG5cbiJdfQ==