import * as React from 'react'
import { Component } from 'react'
import { Badge, Button } from 'react-bootstrap';
interface Props {
    onClick: (event: any, optionID: string) => void
    optionID: string
}
export default class Pill extends Component<Props> {
    render() {
        return (
            <Badge pill variant="primary" onClick={(e) => this.props.onClick(e, this.props.optionID)} >
                {this.props.children}<span style={{ cursor: 'pointer' }}>X</span>
            </Badge>
        )
    }
}