import { Injector, Type } from '@angular/core';

/**
 * Asynchronously loads the specified example and returns its component and
 * an injector instantiated from the containing example module.
 *
 * This is used in the `dev-app` and `e2e-app` and assumes ESBuild having created
 * entry-points for the example modules under the `<host>/bundles/` URL.
 */
declare function loadExample(name: string, injector: Injector): Promise<{
    component: Type<any>;
    injector: Injector;
}>;

export { loadExample };
