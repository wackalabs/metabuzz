import * as React from 'react'

import { Box, BoxProps, c, Column, m, Row, s } from 'styles'

// tslint:disable:max-line-length

type Props = {} & BoxProps

const SlackIcon: React.SFC<Props> = ({ ...rest }: Props) => (
  <m.Svg width="24" height="24" viewBox="70 70 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fill="#E01E5A"
      d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"
    />
    <path
      fill="#E01E5A"
      d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9
      s-12.9-5.8-12.9-12.9V151.2z"
    />
    <path
      fill="#36C5F0"
      d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"
    />
    <path
      fill="#36C5F0"
      d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9
      s5.8-12.9,12.9-12.9H118.8z"
    />
    <path
      fill="#2EB67D"
      d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"
    />
    <path
      fill="#2EB67D"
      d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9
      c7.1,0,12.9,5.8,12.9,12.9V118.8z"
    />
    <path
      fill="#ECB22E"
      d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"
    />
    <path
      fill="#ECB22E"
      d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9
      c0,7.1-5.8,12.9-12.9,12.9H151.2z"
    />
  </m.Svg>
)

export default SlackIcon