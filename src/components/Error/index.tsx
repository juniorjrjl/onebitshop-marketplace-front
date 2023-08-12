import React, {Component, ReactNode} from "react";
import ErrorScreen from "./ErrorScreen";

interface Props {
    children: ReactNode
}

interface State {
    hasErrors: boolean
}

class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props){
        super(props)

        this.state = { hasErrors: false };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        
    }

    render() {
        if (this.state.hasErrors){
            return <ErrorScreen />
        }
        return this.props.children
    }

}

export default ErrorBoundary
