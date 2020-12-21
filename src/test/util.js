import checkPropTypes from 'check-prop-types';


export const findByTestAttr = ({wrapper,attrVal}) => {
    return wrapper.find(`[data-test="${attrVal}"]`)
}

export const checkForPropTypes = ({component,expectedProps}) => {
    return checkPropTypes(component.propTypes,expectedProps,'prop',component.name)
}