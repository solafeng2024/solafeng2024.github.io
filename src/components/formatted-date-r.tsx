import type { FC } from 'react'

interface Props {
  date: Date
}

const FormattedDateR: FC<Props> = props => (
  <time dateTime={props.date.toISOString()}>
    {props.date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}
  </time>
)

export default FormattedDateR
