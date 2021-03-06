import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps';

export function whenMapPropsToQueriesIsFunction(mapPropsToQueries) {
    return (typeof mapPropsToQueries === 'function')
        ? wrapMapToPropsFunc(mapPropsToQueries, 'mapPropsToQueries')
        : undefined;
}

export function whenMapPropsToQueriesIsMissing(mapPropsToQueries) {
    return (!mapPropsToQueries)
        ? wrapMapToPropsConstant(() => ([]))
        : undefined;
}

export default [
    whenMapPropsToQueriesIsFunction,
    whenMapPropsToQueriesIsMissing
];
