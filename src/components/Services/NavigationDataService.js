export default function getNavigationParams(context) {
    if (typeof context.props.navigation === 'undefined') {
        return {};
    }
    return context.props.navigation.state.params || {};
}
