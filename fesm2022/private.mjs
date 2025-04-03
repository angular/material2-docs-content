import { E as EXAMPLE_COMPONENTS } from './example-module-8f01f277.mjs';

/**
 * Asynchronously loads the specified example and returns its component and
 * an injector instantiated from the containing example module.
 *
 * This is used in the `dev-app` and `e2e-app` and assumes ESBuild having created
 * entry-points for the example modules under the `<host>/bundles/` URL.
 */
async function loadExample(name, injector) {
    const { componentName, importPath } = EXAMPLE_COMPONENTS[name];
    const moduleExports = await import(`/bundles/components-examples/${importPath}/index.js`);
    const componentType = moduleExports[componentName];
    return {
        component: componentType,
        injector,
    };
}

export { loadExample };
//# sourceMappingURL=private.mjs.map
