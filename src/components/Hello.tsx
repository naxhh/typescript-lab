import * as React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

export const Hello = (props: HelloProps) =>
  <h1>Hello from {props.compiler} and {props.framework}!</h1>

/**
  Class implementation of the previous stateless component

  Class signature is Component<PropsShape, StateShape>

  export class Hello extends React.Component<HelloProps, undefined> {
    render() {
      return <h1> ... {this.props.compiler} ... </h1>
    }
  }
*/
